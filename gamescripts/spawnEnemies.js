//Enemy management
var levelDelay = 500;
var waveDelay = levelDelay/3;
var level = 1;
function spawnLevels()
{
    if(checkTrigger())
    {
        return level++;
    }
    else
    {
        return level;
    }
}

function spawnLevel(level)
{
    switch(level)
    {
        case 1 :
            if(checkwave())
            {
                spawnWave(1);
            }
            
            break;
        case 2 :
            if(checkwave())
            {
                spawnWave(2);
            }
            break;
        case 3 :
            if(checkwave())
            {
                spawnWave(3);
            }
        case 4 :
            if(checkwave())
            {
                spawnWave(4);
            }
            break;
        case 5 :
            if(checkwave())
            {
                maxAttackCounter = 20;
                spawnWave(5);
                
            }
            break;
        case 6 :
            if(checkwave())
            {
                maxAttackCounter = 20;
                spawnWave(6);
            }
            break;
        case 7 :
            if(checkwave())
            {
                spawnWave(7);
            }
            break;
        case 8 :
            if(checkwave())
            {
                spawnWave(8);
            }
            break;
        case 9 :
            if(checkwave())
            {
                spawnWave(9);
            }
            break;
        case 10 :
            if(checkwave())
            {
                maxAttackCounter = 5;
                spawnWave(10);
            }
            break;
        case 11:
            if(checkwave())
            {
                loop.endMessage = "Bien joué ! Vous avez terminé la version démo. Bientôt plein de nouveautés !";
                loop.endOfTheGame = true;
            }
        default:
            break;
    }
}
var randomnumber = 1;
function spawnWave(level)
{
    randomnumber=Math.floor(Math.random()*901);
    if(randomnumber > 700)
    {
        randomnumber = 870;
    }
    else if (randomnumber < 120)
    {
        randomnumber = 120;
    }
    switch(level)
    {
        case 1 :
            enemyTypes.enemyTypes[0].spawnEnemy(200, 50, "right");
            enemyTypes.enemyTypes[0].spawnEnemy(400, 50, "right");
            enemyTypes.enemyTypes[0].spawnEnemy(600, 50, "left");
            enemyTypes.enemyTypes[0].spawnEnemy(800, 50, "left");
            break;
        case 2 :
            enemyTypes.enemyTypes[1].spawnEnemy(200, 50, "right");
            enemyTypes.enemyTypes[1].spawnEnemy(400, 50, "right");
            enemyTypes.enemyTypes[1].spawnEnemy(600, 50, "left");
            enemyTypes.enemyTypes[1].spawnEnemy(300, 50, "left");
            enemyTypes.enemyTypes[1].spawnEnemy(500, 50, "right");
            enemyTypes.enemyTypes[1].spawnEnemy(700, 50, "left");
            bonusType.bonusType[0].spawnBonus(randomnumber, 50, "left");
            break;
        case 3 :
            enemyTypes.enemyTypes[2].spawnEnemy(200, 50, "right");
            enemyTypes.enemyTypes[2].spawnEnemy(400, 50, "right");
            enemyTypes.enemyTypes[2].spawnEnemy(600, 50, "left");
            enemyTypes.enemyTypes[2].spawnEnemy(800, 50, "left");
            enemyTypes.enemyTypes[2].spawnEnemy(500, 50, "left");
            enemyTypes.enemyTypes[2].spawnEnemy(900, 50, "left");
            bonusType.bonusType[0].spawnBonus(randomnumber, 50, "left");
            break;
        case 4 :
            enemyTypes.enemyTypes[1].spawnEnemy(200, 50, "right");
            enemyTypes.enemyTypes[2].spawnEnemy(400, 50, "right");
            enemyTypes.enemyTypes[2].spawnEnemy(600, 50, "left");
            enemyTypes.enemyTypes[3].spawnEnemy(800, 50, "left");
            bonusType.bonusType[0].spawnBonus(randomnumber, 50, "left");
            break;        
        case 5 :
            enemyTypes.enemyTypes[13].spawnEnemy(500, 50, "left");
            break;        
        case 6 :
            enemyTypes.enemyTypes[5].spawnEnemy(400, 50, "right");
            enemyTypes.enemyTypes[5].spawnEnemy(400, 50, "left");
            enemyTypes.enemyTypes[5].spawnEnemy(200, 50, "right");
            enemyTypes.enemyTypes[5].spawnEnemy(800, 50, "right");

            break;        
        case 7 :
            enemyTypes.enemyTypes[6].spawnEnemy(200, 50, "right");
            enemyTypes.enemyTypes[6].spawnEnemy(400, 50, "left");
            enemyTypes.enemyTypes[6].spawnEnemy(600, 50, "right");
            enemyTypes.enemyTypes[6].spawnEnemy(800, 50, "left");
            bonusType.bonusType[0].spawnBonus(randomnumber, 50, "left");
            break;        
        case 8 :
            enemyTypes.enemyTypes[7].spawnEnemy(100, 50, "right");
            enemyTypes.enemyTypes[7].spawnEnemy(200, 50, "left");
            enemyTypes.enemyTypes[7].spawnEnemy(400, 50, "right");
            enemyTypes.enemyTypes[7].spawnEnemy(500, 50, "left");
            enemyTypes.enemyTypes[7].spawnEnemy(700, 50, "right");
            enemyTypes.enemyTypes[7].spawnEnemy(900, 50, "left");
            bonusType.bonusType[0].spawnBonus(randomnumber, 50, "left");
            break;        
        case 9 :
            enemyTypes.enemyTypes[9].spawnEnemy(100, 50, "right");
            enemyTypes.enemyTypes[9].spawnEnemy(200, 50, "left");
            enemyTypes.enemyTypes[9].spawnEnemy(300, 50, "right");
            enemyTypes.enemyTypes[9].spawnEnemy(400, 50, "left");
            enemyTypes.enemyTypes[9].spawnEnemy(500, 50, "right");
            enemyTypes.enemyTypes[9].spawnEnemy(600, 50, "left");
            enemyTypes.enemyTypes[9].spawnEnemy(700, 50, "right");
            enemyTypes.enemyTypes[9].spawnEnemy(800, 50, "left");
            enemyTypes.enemyTypes[9].spawnEnemy(900, 50, "right");
            break;        
        case 10 :
            enemyTypes.enemyTypes[12].spawnEnemy(500, 50, "left");
            break;
        default:
            break;
    }
}

function checkTrigger()
{
    if(loop.loopCounter  == loop.loopTrigger)
    {
        loop.loopTrigger += levelDelay;
        return true;
    }
    else
    {
        return false;
    }
}

function checkwave()
{
    if(enemies.counterEnemy  == 0)
    {
        loop.loopWave += waveDelay;
        return true;
    }
    else
    {
        return false;
    }
}