var player;
var enemies = [];
var enemyCount = 100;
var arenaSize = 900;
var score = 0;

function setup() {
  createCanvas(600, 600);

  player = new Character(0, 0, 20);

  for (var i = 0; i < enemyCount; i++) {
    var x = random(10, arenaSize - 10);
    var y = random(10, arenaSize - 10);
    enemies[i] = new Enemy(x, y, 10);
  }
}

function restart() {
  player.pos.x = 0;
  player.pos.y = 0;

  enemies.forEach(function(enemy, i) {
    enemy.pos.x = random(10, arenaSize - 10);
    enemy.pos.y = random(10, arenaSize - 10);
  });
  
  score = 0;
}

function draw() {
  background(0);

  translate(width/2 - player.pos.x, height/2 - player.pos.y);

  player.show();
  player.update();
  //console.log("Player x: " + player.pos.x + " y: " + player.pos.y);

  enemies.forEach(function(enemy, i) {
    enemy.show();
    enemy.update();
    if (player.getHit(enemy)) {
      restart();
    }
  });

  noFill();
  stroke(255, 255, 255);
  strokeWeight(3);
  rect(0, 0, arenaSize, arenaSize);

  fill(255);
  textSize(50);
  text(score, player.pos.x, player.pos.y - height*0.3);
  score++;
}
