// Enemies our player must avoid
var Enemyv1 = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
	console.log("instanciando enemy");
    this.sprite = 'images/enemy-bug.png'; 
    this.x = 0;
    this.y = 0;
    var obj = Object.create(Enemy.prototype);
    return obj;
     
   
}

var Enemy = function(x,y){
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
	console.log("new enemy");
    this.sprite = 'images/enemy-bug.png'; 
    this.x = x;
    this.y = y;
    console.log("in enemy x coordenate ");
    console.log(this.x);
    console.log("in enemy y coordenate");
    console.log(this.y);
    console.log("end enemy");
    //var obj = Object.create(Enemy.prototype);
    //return obj;
     
   
}
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	console.log("principio de update");
	this.x = this.x * dt;
	this.y = this.y * dt;
	console.log("final de update");
}

Enemy.prototype.initialPosition = function(x,y) {
	console.log("intial position antes");
	console.log(x);
	console.log(y);
	this.x = x;
	this.y = y;
	console.log(this.x);
	console.log(this.y);
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
	console.log("start render");
	// this.sprite = 'images/enemy-bug.png';
	// this.x = 100;
	 //this.y = 100;
	console.log('x coordenate this.x');
	console.log(this.x);
	console.log('y coordenate this.y');
	console.log(this.y);
	console.log(this.sprite);
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    console.log("end render");
    
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
    var obj = Object.create(Player.prototype);
    return obj;
    
   
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	
	this.x = this.x * dt;
	this.y = this.y * dt;
}

Player.prototype.initialPosition = function(x,y) {
	this.x = x;
	this.y = y;
}
// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

a = new Array();
a['a1']='foo';
a['a2']='bar';

var allEnemies = new Array();
//console.log("principal creando enemigo 1");
//allEnemies[0] = new Enemy(100,100);
console.log("creating enemy one completo");
allEnemies[1] = new Enemy(100,200);
console.log("end enemies");
var player = Player();

player.initialPosition(4,4);
console.log("principal final jugador");
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    //player.handleInput(allowedKeys[e.keyCode]);
});
