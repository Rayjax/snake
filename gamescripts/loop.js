//Main loop
var loop = {
    logicInterval : 50,
    graphicsInterval : 33,
    loopCounter : 0,
    loopTrigger : levelDelay,
    loopWave : levelDelay/3,
    enemiesAttackCounter : 0,
    endOfTheGame : false,
    endMessage : "Game Over. Try again !"
}

//LOGIC
function startLoops(){
  
    var logicLoop = 0;
    logicLoop = setInterval(function(){
    
        //Player actions
        if(userInput.movingLeft && !userInput.movingRight)
        {
            player.move("left");
        }
        else if(!userInput.movingLeft && userInput.movingRight)
        {
            player.move("right");
        }
        if(userInput.attacking && !userInput.attacked)
        {
            player.attack();
            userInput.attacked = true;
        }

        //Elements movement
        bullets.moveBullets();
        bonuses.moveBonus();
        //AI
        AI.moveEnemies();
        if(loop.enemiesAttackCounter >= maxAttackCounter)
        {
            enemies.enemiesAttack();
            loop.enemiesAttackCounter = 0;
        }
    
        //Collisions
        collision.checkGameCollisions();
    
        //Mob Spawn
        spawnLevel(spawnLevels());
    
        //Snake life
        $("#testdiv").html("HP "+player.character.health);
        $("#leveldiv").html("Level "+level);
        
        //Last minute bonus hotfix. Time is short.
        if($("#bonus0").css("left") < "20px")
        {
            $("#bonus0").remove();
        }
        
        //End of the game
        if(loop.endOfTheGame)
        {
            //Player animation
            player.move("top");
            player.draw();
            
            //End message
            if(!elementsManager.checkElementExists("player", 0))
            {
                clearInterval(logicLoop);
                alert(loop.endMessage);
            }
        }
    
        //Clean Impacts
        impacts.cleanImpacts();
    
        //Incrementation
        incrementCounters();   
    
    }, loop.logicInterval);

    //GRAPHICs
    setInterval(function(){
        //Draws
        player.draw();
        bullets.drawBullets();
        enemies.drawEnemies();
        bonuses.drawBonus();
    
    }, loop.graphicsInterval);
}

function getTimeForLevels(time)
{
    if(loop.wavesSpawnCounter == (time*1000) / loop.logicInterval)
    {
        loop.wavesSpawnCounter = 0;
        return true;
    }
    return false;
}

//Increment
function incrementCounters()
{
    loop.loopCounter++;
    loop.enemiesAttackCounter++;
}

function dump(obj) {
    var out = '';
    for (var i in obj) {
        out += i + ": " + obj[i] + "\n";
    }

    alert(out);
}