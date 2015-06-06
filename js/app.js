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

var Enemy = function(x,y,speed){
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
	
    this.sprite = 'images/enemy-bug.png'; 
    this.x = x;
    this.y = y;
    this.speed = speed;
        
   
}
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	
	this.x = this.x + this.speed * dt;
	
}


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
		
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
   
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png'; 
    this.x = x;
    this.y = y;
    this.speed = speed;
    
  
    
   
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function() {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	
	
	this.x = this.x ;
	
}


// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
	
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
Player.prototype.collisions = function() {
	
	console.log("startcollisions ");
	console.log("collisions player this.x "+player.x);

	console.log("collisions player this.y "+player.y);
	
	
	console.log("first enemy x "+Math.floor(allEnemies[1].x));
	
	console.log("first enemy y "+allEnemies[1].y);
	
	console.log("second enemy x "+Math.floor(allEnemies[2].x));
	
	console.log("second enemy y "+allEnemies[2].y);
	
	console.log("third enemy x "+Math.floor(allEnemies[3].x));
	
	console.log("third enemy y "+allEnemies[3].y);
	
	if ((parseInt(player.x) == Math.floor(parseInt(allEnemies[1].x))) && (parseInt(player.y) == parseInt(allEnemies[1].y))) {
	console.log("colision 1");
	  player.x = 0;
      player.y = 0;
    allEnemies[1].x = 0;
  	allEnemies[1].y = 0;
      
     }
	if ((parseInt(player.x) == Math.floor(parseInt(allEnemies[2].x))) && (parseInt(player.y) == parseInt(allEnemies[2].y))) {
	console.log("colision 2");
	   player.x = 0;
	   player.y = 0;
	      
	     }
	
	if ((parseInt(player.x) == Math.floor(parseInt(allEnemies[3].x))) && (parseInt(player.y) == parseInt(allEnemies[3].y))) {
		console.log("colision 3");
		   player.x = 0;
		   player.y = 0;
		     }
	
	
}
Player.prototype.handleInput = function(event) {
	
	
	if (event == "up") {
		
		this.y= this.y - 10;
		
		
	}
	if (event == "down") {
		
		this.y= this.y + 10;
		
	}
	if (event == "right") {
		
		this.x= this.x + 10;
		
	}
	if (event == "left") {
		
		this.x= this.x - 10;
		
	}
	
		
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

a = new Array();
a['a1']='foo';
a['a2']='bar';

var allEnemies = new Array();

allEnemies[1] = new Enemy(0,50,20);
allEnemies[2] = new Enemy(0,200,30);
allEnemies[3] = new Enemy(0,300,50);

var player = new Player(200,400,4);
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
    
   
    
    player.handleInput(allowedKeys[e.keyCode]);
});
