//Basic AI (how enemies move)
var AI = {
    verticalMoveCounter : 0,
    verticalMoveLimit : 7,
    bossDebugger : 0,
    doEnemyMoveSequence : function(enemy)
    {
        //HORIZONTAL
        if(enemy.moveSequence == "horizontal")
        {
            //Change direction
            if(enemy.character.element.left < 10)
            {
                enemy.currentDirection = "right";
            }
            else if(enemy.character.element.left > (playground.w - enemy.character.element.width - 10))
            {
                enemy.currentDirection = "left";
            }
            
            //Move
            if(enemy.currentDirection == "right")
            {
                enemy.move("right");
            }
            else if(enemy.currentDirection == "left")
            {
                enemy.move("left");
            }
        }
        
        //UPDOWN
        else if(enemy.moveSequence == "updown")
        {
            //Change direction
            if(enemy.character.element.left < 10)
            {
                enemy.currentDirection = "right";
            }
            else if(enemy.character.element.left > (playground.w - enemy.character.element.width - 10))
            {
                enemy.currentDirection = "left";
            }
            
            //Move
            if(enemy.currentDirection == "right")
            {
                enemy.move("right");
            }
            else if(enemy.currentDirection == "left")
            {
                enemy.move("left");
            }
            
            if(enemy.moveCounter < enemy.moveCounterLimit){
                enemy.move("bottom");
            }
            else if (enemy.moveCounter < enemy.moveCounterLimit*2){
                enemy.move("top");
            }
            else{
                enemy.moveCounter = 0;
            }
            enemy.moveCounter++;
        }
        
        if(AI.verticalMoveCounter >= AI.verticalMoveLimit){
            AI.verticalMoveCounter = 0;
            if(enemy.typeEnnemi != "manudavidson" && enemy.typeEnnemi != "javalex")
            {
                enemy.move("bottom");
            }
            else
            {
                AI.bossDebugger++;
                if(AI.bossDebugger == 2)
                {
                    enemy.move("bottom");
                    AI.bossDebugger = 0;
                }
            }
        }
        AI.verticalMoveCounter++;
    },
    moveEnemies : function()
    {
        var enemy
        for(enemyid in enemies.enemies)
        {
            enemy = enemies.enemies[enemyid];
            AI.doEnemyMoveSequence(enemy);
        }
    }
}
