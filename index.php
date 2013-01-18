<!DOCTYPE html>
<html>
    <!-- 3-Day developed webgame - Enjoy :) -->
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

        <!-- Style -->
        <link rel="stylesheet" type="text/css" href="style/base.css" media="all" />

        <!-- Plugins -->
        <script src="plugins/foreach.js" type="text/javascript"></script>
        <script src="plugins/jquery.js" type="text/javascript"></script>
        <script src="plugins/gamequery.js" type="text/javascript"></script>

        <title></title>
    </head>
    <body>
        <!-- Main game container -->
        <div id="playground"></div>

        <!-- GameJam Logo -->
        <div id="logo"></div>

        <!-- Top right notifications container -->
        <div id="testdiv">Loading please wait...</div>

        <!--Top left notifications container -->
        <div id="leveldiv"></div>

        <!--Hidden preloading div-->
        <div id="preload"></div>

        <!-- Resources caching -->
        <script src="gamescripts/resourcesPaths.js" type="text/javascript"></script>
        <script type="text/javascript">
            
            //Image files caching
            imageObj = new Image();
            var images = new Array();
            images[0]=fileNames.background1;
            images[1]=fileNames.bulletLittleBomb;
            images[2]=fileNames.bulletPoison;
            images[3]=fileNames.button;
            images[4]=fileNames.enemy1;
            images[5]=fileNames.enemy2;
            images[6]=fileNames.enemy3;
            images[7]=fileNames.enemy4;
            images[8]=fileNames.enemy5;
            images[9]=fileNames.enemy6;
            images[10]=fileNames.enemy7;
            images[11]=fileNames.enemy8;
            images[12]=fileNames.enemy9;
            images[13]=fileNames.explosionBig;
            images[14]=fileNames.explosionMedium;
            images[15]=fileNames.explosionSmall;
            images[16]=fileNames.menu;
            images[17]=fileNames.missing;
            images[18]=fileNames.snake;
            images[19]=fileNames.snakeAttack;
            images[20]=fileNames.snakeDeath;
            images[21]=fileNames.souris;
            images[22]=fileNames.manu;
            images[23]=fileNames.alex;
            
            // Start preloading
            for(i=0; i<=23; i++) 
            {
                imageObj.src=images[i];
            }
            //GameJam Logo
            $("#logo").html('<img src = "'+fileNames.logo+'"/>');
        </script>

        <!-- Julien's sound plugin -->
        <script src="plugins/script/soundmanager2.js" type="text/javascript" ></script>

        <!-- Game Logic -->
        <script src="gamescripts/playground.js" type="text/javascript"></script>
        <script src="gamescripts/background.js" type="text/javascript"></script>
        <script src="gamescripts/impacts.js" type="text/javascript"></script>
        <script src="gamescripts/elementsManager.js" type="text/javascript"></script>
        <script src="workclasses/Element.js" type="text/javascript"></script>
        <script src="workclasses/Character.js" type="text/javascript"></script>
        <script src="workclasses/Player.js" type="text/javascript"></script>
        <script src="workclasses/Enemy.js" type="text/javascript"></script>
        <script src="workclasses/EnemyFactory.js" type="text/javascript"></script>
        <script src="workclasses/Weapon.js" type="text/javascript"></script>
        <script src="workclasses/Bullet.js" type="text/javascript"></script>
        <script src="workclasses/Bonus.js" type="text/javascript"></script>
        <script src="workclasses/BonusFactory.js" type="text/javascript"></script>
        <script src="gamescripts/bullets.js" type="text/javascript"></script>
        <script src="gamescripts/weapons.js" type="text/javascript"></script>
        <script src="gamescripts/enemyTypes.js" type="text/javascript"></script>
        <script src="gamescripts/enemies.js" type="text/javascript"></script>
        <script src="gamescripts/collision.js" type="text/javascript"></script>
        <script src="gamescripts/spawnEnemies.js" type="text/javascript"></script>
        <script src="gamescripts/AI.js" type="text/javascript"></script>
        <script src="gamescripts/snake.js" type="text/javascript"></script>
        <script src="gamescripts/bonusType.js" type="text/javascript"></script>
        <script src="gamescripts/bonuses.js" type="text/javascript"></script>
        <script src="gamescripts/bosses.js" type="text/javascript"></script>
        <script src="gamescripts/userInput.js" type="text/javascript"></script>
        <script src="gamescripts/loop.js" type="text/javascript"></script>
        <script src="gamescripts/sound.js" type="text/javascript"></script>

        <!-- Game init -->
        <script type="text/javascript">
            var soundOn = true;
			
            //If browser is not chrome/safari
            if (!jQuery.browser.safari) {
                alert("If you run into problems with the game, please use Google Chrome\n\Si vous rencontrez des problèmes avec le jeu, utilisez le navigateur Google Chrome");
            }
			
            //Start Game as soon as everything is loaded
            soundManager.onload = function(){
                loadSounds();
                $("#preload").css("visibility", "hidden");
                $("#testdiv").css("left", "940px");
                $("#testdiv").html("");
                SM.startGame();
                $("body").append('<img class="menu" src ="' + fileNames.menu + '"/>');
                $("body").append('<img class="menu" id="playbutton" src ="' + fileNames.button + '"/>');
                $("body").append('<img class="menu" id="scoresbutton" src ="' + fileNames.button + '"/>');
					
                //Start new game
                $("#playbutton").click(function(){
                    $(".menu").remove();
                    $playground.playground().startGame();
                    startLoops();
                    SM.songGame();
                });
					
                //Scores
                $("#scoresbutton").click(function(){
                    alert("Unavailable in demo version. Please wait until next release :)");
                }); 
            }
        </script>
    </body>
</html>
