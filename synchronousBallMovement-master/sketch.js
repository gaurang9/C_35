var canvas,
backgroundImage,
gameState,
playerCount,
database,
form,player,
gameState



function setup(){
canvas=createCanvas(400,400)
gameState=0
database=firebase.database()
game=new Game()
game.getState()
game.start()
}

function draw(){
  background("white");
}
