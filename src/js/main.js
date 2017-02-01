(function () {
    window.cancelAnimFrame = function(){
    return (
      window.cancelAnimationFrame       ||
      window.webkitCancelAnimationFrame ||
      window.mozCancelAnimationFrame    ||
      window.oCancelAnimationFrame      ||
      window.msCancelAnimationFrame     ||
      function(id){
        window.clearTimeout(id);
      }
    );
  }();

  window.requestAnimFrame = function() {
    return (
      window.requestAnimationFrame       ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame    ||
      window.oRequestAnimationFrame      ||
      window.msRequestAnimationFrame     ||
      function(callback) {
        window.setTimeout(callback, 1000 / 60);
      }
    );
  }();

  function SVGElem(elem) {
    this.elem = elem;
    this.current_frame = 0;
    this.total_frames = 60;
    this.path = [];
    this.length = [];
    this.rendered = false;

    this.init();
  };

  SVGElem.prototype.init = function() {
    var self = this;
    var paths = [].slice.call( this.elem.querySelectorAll('path') )

    paths.forEach(function(path, i) {
      self.path[i] = path;
      var length = path.getTotalLength();
      self.length[i] = length;
      self.path[i].style.strokeDasharray = length + ' ' + length;
      self.path[i].style.strokeDashOffset = length;
    });
  };

  SVGElem.prototype.render = function() {
    if (this.rendered) return;

    this.rendered = true;
    this.draw();
  };

  SVGElem.prototype.draw = function() {
    var self = this;
    var progress = this.current_frame/this.total_frames;

    this.elem.style.opacity = 1;

    // animation end
    if (progress > 1) {
      window.cancelAnimFrame(this.animation_frame);

      // fade out svg after animation end
      if (this.elem.parentNode.tagName === "FIGURE") {
        this.elem.style.opacity = 0;
      }
    } else {
      this.current_frame++;

      for(var j=0, len = this.path.length; j<len;j++){
        this.path[j].style.strokeDashoffset = Math.floor(this.length[j] * (1 - progress));
      }

      this.animation_frame = window.requestAnimFrame(function() {
        self.draw();
      });
    }

  };

  function getViewportH() {
    var client = window.document.documentElement['clientHeight'],
      inner = window['innerHeight'];

    if( client < inner )
      return inner;
    else
      return client;
  };

  function getOffset( el ) {
		var offsetTop = 0, offsetLeft = 0;
		do {
			if ( !isNaN( el.offsetTop ) ) {
				offsetTop += el.offsetTop;
			}
			if ( !isNaN( el.offsetLeft ) ) {
				offsetLeft += el.offsetLeft;
			}
		} while( el = el.offsetParent )

		return {
			top : offsetTop,
			left : offsetLeft
		};
	}

  function inViewport(elem) {
    var elemHeight = elem.offsetHeight;
    var elemTop = getOffset(elem).top;
    var elemBot = elemTop + elemHeight;
    var scrolled = window.scrollY;
    var viewed = scrolled + getViewportH();

    return (elemTop + elemHeight * .5) <= viewed && elemBot >= scrolled;
  }

  function init() {
    var didScroll = false;
    var svgs = [].slice.call( document.querySelectorAll('body svg') );
    var svgElems = [];
    var imgs = [].slice.call( document.querySelectorAll( '.games-container figure a') )

    svgs.forEach( function(svg, i) {
      var svgElem = new SVGElem(svg);
      svgElems[i] = svgElem;

      if (inViewport(svg.parentNode)) {
        svgElem.render();
      }
    });

    var scrollHandler = function() {
      if (!didScroll) {
        didScroll = true;
        setTimeout(function() { scrollPage(); }, 60);
      }
    };

    var scrollPage = function() {
      // Render svg animation if in viewport
      svgElems.forEach( function(svgElem, i) {
        if (inViewport(svgElem.elem.parentNode.parentNode)) {
          svgElem.render();
        }
      });
      // Transition game imgs
      imgs.forEach( function(img, i) {
        if (inViewport(img.parentNode.parentNode)) {
          img.style.opacity = 1;
        }
      });

      didScroll = false;
    };

    window.addEventListener( 'scroll', scrollHandler, false);
  };

  init();
})();
