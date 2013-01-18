//Julien's sound management
soundManager.url = 'plugins/swf/';
soundManager.debugMode = true;

// - - - - ----- Variable
var decompteIntro=3;
var manuDecompte=2;
var gameOverDecompte=2;
var decompteCommencer=1;
var startGame;
var snakeAttack;
var snakeAttack2;
var  snakeImpact;
var  snakeImpact2;
var  snakeLowLife;
var  snakeDie;
var  addScore;
var  menuSong;
var  monsterDie;
var  monsterHit;
var  monsterMbAttack;
var  monsterMbImpact;
var  monsterMbDie;
var  unbuffLife2;
var  unbuffLife;
var  unbuff;
var  buff;
var  buffLife;
var  buff2;
var  gameOver;
var  songGame;
var  manuStart;
var  manuAttack2;
var  manuAttack;
var  manuImpact;
var  manuDie;
var  manuIntro;
var  alexStart;
var  alexAttack2;
var  alexAttack;
var  alexImpact;
var  alexDie;
var  alexIntro;
var  ambianceBoss;
var  flyAttack;
var  flyIntro;
var  flyImpact; // NO SONG
var  flyDie;
var  flyStart;
var multiplicateurVolume = 15;


function loadSounds() {
		
    // - - - - ----- song started at load (facultatif je me comprend)_____ _ _ _ _
		
    //soundManager.play("songIntro", "Jeu_Son.mp3");
		
    // - - - - -----Game's song_____ _ _ _ _
		
    songGame = soundManager.createSound(
    {
        id : "songGame",
        url : "resources/sound/ambiance_jeu/Jeu_Son.mp3",
        volume : 5 * multiplicateurVolume,
        onfinish : function(){ // BOUCLE LA MUSIQUE
            songGame.play();
        }
    });
		
    // - - - - ----- Intro's song_____ _ _ _ _
		
    startGame = soundManager.createSound(
    {
        id : "startGame",
        url : "resources/sound/Start_game/Bruit_Serpent.mp3",
        volume : 25 * multiplicateurVolume
    });
		
    menuSong = soundManager.createSound(
    {
        id : "menuSong",
        url : "resources/sound/menu/jingle_nature.mp3",
        volume : 25 * multiplicateurVolume
			
    });
		
    // - - - - ----- Snake's song_____ _ _ _ _
		
    snakeAttack = soundManager.createSound(
    {
        id : "snakeAttack",
        url : "resources/sound/serpent/attaque/Attaque.mp3",
        volume : 10	* multiplicateurVolume
    });
    snakeAttack2 = soundManager.createSound(
    {
        id : "snakeAttack2",
        url : "resources/sound/serpent/attaque/Attaque2.mp3",
        volume : 10	* multiplicateurVolume
    });
    snakeImpact = soundManager.createSound(
    {
        id : "snakeImpact",
        url : "resources/sound/serpent/degat_subis/Impact_Serpent.mp3",
        volume : 10	* multiplicateurVolume
    });
    snakeImpact2 = soundManager.createSound(
    {
        id : "snakeImpact2",
        url : "resources/sound/serpent/degat_subis/Impact_Serpent2.mp3",
        volume : 10	* multiplicateurVolume
    });
    snakeLowLife = soundManager.createSound(
    {
        id : "snakeLowLife",
        url : "resources/sound/serpent/lowlife/un_pv.mp3",
        volume : 20	* multiplicateurVolume
    });
    snakeDie = soundManager.createSound(
    {
        id : "snakeDie",
        url : "resources/sound/serpent/mort/Mort.mp3",
        volume : 15	* multiplicateurVolume
    }); 
		
    // - - - - ----- score_____ _ _ _ _
		
    addScore = soundManager.createSound(
    {
        id : "addScore",
        url : "resources/sound/points/piece.mp3",
        volume : 15	* multiplicateurVolume
    }); 
		
    // - - - - ----- monsters_____ _ _ _ _
		
    monsterDie  = soundManager.createSound(
    {
        id : "monsterDie",
        url : "resources/sound/monstre_basic/mort/Mob_Meurt.mp3",
        volume : 15	* multiplicateurVolume
    }); 
		
    monsterHit = soundManager.createSound(
    {
        id : "monsterHit",
        url : "resources/sound/monstre_basic/mort/Mob_Collision.mp3",
        volume : 15	* multiplicateurVolume
    }); 
		
    // - - - - ----- monsters miniBoss_____ _ _ _ _
		
    monsterMbAttack = soundManager.createSound(
    {
        id : "monsterMbAttack",
        url : "resources/sound/miniBoss/attaque/Attaque_Mini_Boss.mp3",
        volume : 15	* multiplicateurVolume
    }); 
		
    monsterMbImpact = soundManager.createSound(
    {
        id : "monsterMbImpact",
        url : "resources/sound/miniBoss/degat_subit/MiniBoss_Degat.mp3",
        volume : 25	* multiplicateurVolume
    });
		
    monsterMbDie = soundManager.createSound(
    {
        id : "monsterMbDie",
        url : "resources/sound/miniBoss/mort/MiniBoss_Mort.MP3"	,
        volume : 25* multiplicateurVolume
    });
		
    // - - - - ----- Buff and Unbuff_____ _ _ _ _
		
    unbuffLife = soundManager.createSound(
    {
        id : "unbuffLife",
        url : "resources/sound/malus/Debuff_Vie.mp3",
        volume : 25	* multiplicateurVolume
    });
		
    unbuffLife2 = soundManager.createSound(
    {
        id : "unbuffLife2",
        url : "resources/sound/malus/Debuff_Vie2.mp3",
        volume : 25	* multiplicateurVolume
    });
		
    unbuff = soundManager.createSound(
    {
        id : "unbuff",
        url : "resources/sound/malus/Debuff.mp3",
        volume : 25	* multiplicateurVolume
    }); 
		
    buff = soundManager.createSound(
    {
        id : "buff",
        url : "resources/sound/bonus/Buff.mp3",
        volume : 25	* multiplicateurVolume
    });  
		
    buffLife = soundManager.createSound(
    {
        id : "buffLife",
        url : "resources/sound/bonus/Buff_Vie2.mp3",
        volume : 25	* multiplicateurVolume
    });  
		
    buff2 = soundManager.createSound(
    {
        id : "buff2",
        url : "resources/sound/bonus/Buff2.mp3",
        volume : 25	* multiplicateurVolume
    }); 
		 
    // - - - - ----- Game Over_____ _ _ _ _
		
    gameOver = soundManager.createSound(
    {
        id : "gameOver",
        url : "resources/sound/game_over/Game_Over.mp3",
        volume : 25 * multiplicateurVolume
    }); 
		
    // - - - - ----- BOSS_____ _ _ _ _
    // - - - --- MANU___ _ _ _
			
    manuAttack = soundManager.createSound(
    {
        id : "manuAttack",
        url : "resources/sound/boss/manu/attaque/Manu_Attaque.mp3",
        volume : 25	* multiplicateurVolume
    }); 
			
    manuAttack2 = soundManager.createSound(
    {
        id : "manuAttack2",
        url : "resources/sound/boss/manu/attaque/Manu_Attaque2.mp3"	,
        volume : 25 * multiplicateurVolume
    }); 
			
    manuStart = soundManager.createSound(
    {
        id : "manuStart",
        url : "resources/sound/boss/manu/cri_intro/Start_Manu.mp3",
        volume : 25 * multiplicateurVolume
    /*onfinish : function(){ // BOUCLE LA MUSIQUE
					manuStart.play();
				}*/
    }); 
			
    manuImpact = soundManager.createSound(
    {
        id : "manuImpact",
        url : "resources/sound/boss/manu/degat_subit/Manu_Impact.mp3"	,
        volume : 25 * multiplicateurVolume
    }); 
			
    manuDie = soundManager.createSound(
    {
        id : "manuDie",
        url : "resources/sound/boss/manu/mort/Cri_Die.mp3"	,
        volume : 10 * multiplicateurVolume
    }); 
			
    manuIntro = soundManager.createSound(
    {
        id : "Intro_Manu.mp3",
        url : "resources/sound/Intro_Manu.mp3",
        volume : 5 * multiplicateurVolume
    }); 	
			
    // - - - --- ALEX___ _ _ _
			
    alexAttack = soundManager.createSound(
    {
        id : "alexAttack",
        url : "resources/sound/boss/alex/attaque/Alex_Attaque.mp3",
        volume : 25	 * multiplicateurVolume
    }); 
			
    alexAttack2 = soundManager.createSound(
    {
        id : "alexAttack2",
        url : "resources/sound/boss/alex/attaque/Alex_Attaque2.mp3",
        volume : 25	* multiplicateurVolume
    }); 
			
    alexStart = soundManager.createSound(
    {
        id : "Start_Alex.mp3",
        url : "resources/sound/boss/alex/cri_intro/Start_Alex.mp3",
        volume : 10	* multiplicateurVolume
    }); 
			
    alexImpact = soundManager.createSound(
    {
        id : "alexImpact",
        url : "resources/sound/boss/alex/degat_subit/Alex_Impact.mp3",
        volume : 25	* multiplicateurVolume
    }); 
			
    alexDie = soundManager.createSound(
    {
        id : "alexDie",
        url : "resources/sound/boss/alex/mort/Mort_alex.mp3",
        volume : 15	* multiplicateurVolume
    }); 
			
    alexIntro = soundManager.createSound(
    {
        id : "alexIntro",
        url : "resources/sound/boss/alex/son_intro/Intro_Alex.mp3",
        volume : 15	* multiplicateurVolume
    });	
				
    ambianceBoss = soundManager.createSound(
    {
        id : "ambianceBoss",
        url : "resources/sound/boss/ambiance/Dark_hero.mp3",
        volume : 2	* multiplicateurVolume
    });			
				
    // - - - --- FLY BOSS___ _ _ _
				
    flyAttack = soundManager.createSound(
    {
        id : "flyAttack",
        url : "resources/sound/boss/porte_avion/attaque/attaque_avion.mp3",
        volume : 25	* multiplicateurVolume
    });		
				
    flyStart = soundManager.createSound(
    {
        id : "flyStart",
        url : "resources/sound/boss/porte_avion/cri_intro/sf_banzai_01.mp3",
        volume : 25	* multiplicateurVolume
    });	
			
    flyIntro = soundManager.createSound(
    {
        id : "flyIntro",
        url : "resources/sound/boss/porte_avion/son_intro/sirene1.mp3",
        volume : 25	* multiplicateurVolume
    });	
			
    flyDie = soundManager.createSound(
    {
        id : "flyDie",
        url : "resources/sound/boss/porte_avion/son_intro/sf_explosion_01.mp3"	,
        volume : 25* multiplicateurVolume
    });	
			
    credit = soundManager.createSound(
    {
        id : "credit",
        url : "resources/sound/credit/Un_jour_je_serai_le_meilleur_dresseur.mp3",
        volume : 30 * multiplicateurVolume,				
        onfinish : function(){ // BOUCLE LA MUSIQUE
            credit.play();
        }
    });
			
				
}
	
	
	
	
// - - - - ----- Permet d'appeler le son_____ _ _ _ _
	
var SM = {
	
    credit : function(){
        credit.play();
    },
    startGame : function(){
        startGame.play();
    },
    startGamePause : function(){
        startGame.pause();
    },
    songGame : function(){
        songGame.play();	
    },
    songGamePause : function(){
        songGame.pause();	
    },
    menuSong : function(){
        menuSong.play();	
    },
    menuSongPause : function(){
        menuSong.pause();	
    },
    snakeAttack : function(){
        snakeAttack.play();	
    },
    snakeAttack2 : function(){
        snakeAttack2.play();	
    },
    snakeImpact : function(){
        snakeImpact.play();	
    },
    snakeImpact2 : function(){
        snakeImpact2.play();	
    },
    snakeLowLife : function(){
        snakeLowLife.play();	
    },
    snakeLowLifePause : function(){
        snakeLowLife.pause();	
    },
    snakeDie : function(){
        snakeDie.play();	
    },
    addScore : function(){
        addScore.play();	
    },
    monsterDie : function(){
        monsterDie.play();	
    },
    monsterHit : function(){
        monsterHit.play();	
    },
    monsterMbAttack : function(){
        monsterMbAttack.play();	
    },
    monsterMbImpact : function(){
        monsterMbImpact.play();	
    },
    monsterMbDie : function(){
        monsterMbDie.play();	
    },
    unbuffLife : function(){
        unbuffLife.play();	
    },
    unbuffLife2 : function(){
        unbuffLife2.play();	
    },
    unbuff : function(){
        unbuff.play();	
    },
    buff : function(){
        buff.play();	
    },
    buffLife : function(){
        buffLife.play();	
    },
    buff2 : function(){
        buff2.play();	
    },
    gameOver : function(){ // en test
        gameOver.play();	
    },
    gameOverPause : function(){ // en test
        gameOver.pause();	
    },
    manuAttack : function(){
        manuAttack.play();	
    },
    manuAttack2 : function(){
        manuAttack2.play();	
    },
    manuStart : function(){
        manuStart.play();
    },
    manuStartPause : function(){ // en test
        manuStart.pause();
    },
    manuImpact : function(){
        manuImpact.play();	
    },
    manuDie : function(){
        manuDie.play();	
    },
    manuIntro : function(){
        manuIntro.play();	
    },
    alexAttack : function(){
        alexAttack.play();	
    },
    alexAttack2 : function(){
        alexAttack2.play();	
    },
    alexStart : function(){
        alexStart.play();	
    },
    alexImpact : function(){
        alexImpact.play();	
    },
    alexDie : function(){
        alexDie.play();	
    },
    alexIntro : function(){
        alexIntro.play();	
    },
    ambianceBoss : function(){
        ambianceBoss.play();	
    },
    ambianceBossPause : function(){
        ambianceBoss.pause();	
    },
    flyAttack : function(){
        flyAttack.play();	
    },
    flyStart : function(){
        flyStart.play();	
    },
    flyIntro : function(){
        flyIntro.play();	
    },
    flyDie : function(){
        flyDie.play();	
    }
	
}