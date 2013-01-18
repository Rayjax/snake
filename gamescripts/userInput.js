//User scrolling input
var userInput = {
    leftKey : 37,
    upKey : 38,
    rightKey : 39,
    downKey : 40,
    spaceBar : 32,
    movingLeft : false,
    movingRight : false,
    attacking : false,
    attacked : true
};

//keydown
$(document).keydown(function (e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    
    //Move
    //left
    if(code == userInput.leftKey) {
        userInput.movingLeft = true;
    //player.move("left");
    }
    
    //right
    if(code == userInput.rightKey) {
        userInput.movingRight = true;
    //player.move("right");
    }
    
    //Attack
    if(code == userInput.spaceBar || code == userInput.upKey) {
        userInput.attacking = true;
    }
    
//Refresh dessin
//Player.draw();
});

$(document).keyup(function (e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    
    //Move
    //left
    if(code == userInput.leftKey) {
        userInput.movingLeft = false;
    }
    //Right
    if(code == userInput.rightKey) {
        userInput.movingRight = false;
    }
    //Attack
    if(code == userInput.spaceBar || code == userInput.upKey) {
        userInput.attacked = false;
        if(soundOn)
        {
            SM.snakeAttack2();
        }
    }
});