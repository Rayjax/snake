//Definition of different enemy types and their configurations
var enemyTypes = {
    enemyTypes : new Array(),
    counter : 0
};

//Initialisation des ennemis

//Poison
var sbireAnimations1 = {
    base : new $.gameQuery.Animation({
        imageURL : fileNames.enemy1,
        numberOfFrame : 2, // nous avons ici 4 frames
        delta : 39, // on définit la largeur d'une frame à 40px
        rate : 500, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    })
}
var sbireAnimations2 = {
    base : new $.gameQuery.Animation({
        imageURL : fileNames.enemy2,
        numberOfFrame : 2, // nous avons ici 4 frames
        delta : 40, // on définit la largeur d'une frame à 40px
        rate : 500, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    })
}
var sbireAnimations3 = {
    base : new $.gameQuery.Animation({
        imageURL : fileNames.enemy3,
        numberOfFrame : 2, // nous avons ici 4 frames
        delta : 40, // on définit la largeur d'une frame à 40px
        rate : 500, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    })
}
var sbireAnimations4 = {
    base : new $.gameQuery.Animation({
        imageURL : fileNames.enemy4,
        numberOfFrame : 2, // nous avons ici 4 frames
        delta : 59, // on définit la largeur d'une frame à 40px
        rate : 500, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    })
}
var sbireAnimations5 = {
    base : new $.gameQuery.Animation({
        imageURL : fileNames.enemy5,
        numberOfFrame : 2, // nous avons ici 4 frames
        delta : 50, // on définit la largeur d'une frame à 40px
        rate : 500, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    })
}
var sbireAnimations6 = {
    base : new $.gameQuery.Animation({
        imageURL : fileNames.enemy6,
        numberOfFrame : 2, // nous avons ici 4 frames
        delta : 50, // on définit la largeur d'une frame à 40px
        rate : 500, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    })
}
var sbireAnimations7 = {
    base : new $.gameQuery.Animation({
        imageURL : fileNames.enemy7,
        numberOfFrame : 2, // nous avons ici 4 frames
        delta : 65, // on définit la largeur d'une frame à 40px
        rate : 500, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    })
}
var sbireAnimations8 = {
    base : new $.gameQuery.Animation({
        imageURL : fileNames.enemy8,
        numberOfFrame : 2, // nous avons ici 4 frames
        delta : 62, // on définit la largeur d'une frame à 40px
        rate : 500, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    })
}
var sbireAnimations9 = {
    base : new $.gameQuery.Animation({
        imageURL : fileNames.enemy9,
        numberOfFrame : 2, // nous avons ici 4 frames
        delta : 70, // on définit la largeur d'une frame à 40px
        rate : 500, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    })
}
var sbireAnimations10 = {
    base : new $.gameQuery.Animation({
        imageURL : fileNames.enemy9,
        numberOfFrame : 2, // nous avons ici 4 frames
        delta : 70, // on définit la largeur d'une frame à 40px
        rate : 500, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on p
    })
}
var sbireAnimations11 = {
    base : new $.gameQuery.Animation({
        imageURL : fileNames.enemy9,
        numberOfFrame : 2, // nous avons ici 4 frames
        delta : 70, // on définit la largeur d'une frame à 40px
        rate : 500, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on p
    })
}
var sbireAnimations12 = {
    base : new $.gameQuery.Animation({
        imageURL : fileNames.enemy9,
        numberOfFrame : 2, // nous avons ici 4 frames
        delta : 70, // on définit la largeur d'une frame à 40px
        rate : 500, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on p
    })
}
var sbireAnimations13 = {
    base : new $.gameQuery.Animation({
        imageURL : fileNames.manu,
        numberOfFrame : 2, // nous avons ici 4 frames
        delta : 150, // on définit la largeur d'une frame à 40px
        rate : 500, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    })
}
var sbireAnimations14 = {
    base : new $.gameQuery.Animation({
        imageURL : fileNames.alex,
        numberOfFrame : 2, // nous avons ici 4 frames
        delta : 150, // on définit la largeur d'une frame à 40px
        rate : 500, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    })
}
//id, health, weapon, damage, speed, moveSequence, enemyType, animations, width, height
//TODO : changer les animations de chacun des sbires 
//
//Définition du tableau d'énemi :'
//level 1 :
//  -   enemyTypes.enemyTypes[1] --->champi1
//  -   enemyTypes.enemyTypes[2] --->oeil1
//  -   enemyTypes.enemyTypes[3] --->bomb1
//level 2 :
//  -   enemyTypes.enemyTypes[4] --->champi2
//  -   enemyTypes.enemyTypes[5] --->oeil2
//  -   enemyTypes.enemyTypes[6] --->bomb2
//level 3 :
//  -   enemyTypes.enemyTypes[7] --->champi3
//  -   enemyTypes.enemyTypes[8] --->oeil3
//  -   enemyTypes.enemyTypes[9] --->bomb3
//MiniBoss :
//  -   enemyTypes.enemyTypes[10] --->ungrycat
//  -   enemyTypes.enemyTypes[11] --->bobzombie
//  -   enemyTypes.enemyTypes[12] --->warboat  
//BOSS :
//  -   enemyTypes.enemyTypes[13] --->manudavidson
//  -   enemyTypes.enemyTypes[14] --->javalex
//level 1---------------
//                                                                              (id, health, weapon, damage, speed, moveSequence, enemyType, animations, width, height)
enemyTypes.enemyTypes[enemyTypes.counter] = new EnemyFactory(enemyTypes.counter, 1, weapons.weapons[1], 1, 10, "horizontal", "champi1", sbireAnimations1, 39, 50);
enemyTypes.counter++;

enemyTypes.enemyTypes[enemyTypes.counter] = new EnemyFactory(enemyTypes.counter, 1, weapons.weapons[2], 1, 10, "horizontal", "oeil1", sbireAnimations2, 40, 74);
enemyTypes.counter++;

enemyTypes.enemyTypes[enemyTypes.counter] = new EnemyFactory(enemyTypes.counter, 1, weapons.weapons[3], 1, 10, "horizontal", "bomb1", sbireAnimations3, 40, 50);
enemyTypes.counter++;
//end level 1 --------------

//level 2 ------------------
enemyTypes.enemyTypes[enemyTypes.counter] = new EnemyFactory(enemyTypes.counter, 2, weapons.weapons[4], 1, 10, "horizontal", "champi2", sbireAnimations4, 59, 110);
enemyTypes.counter++;

enemyTypes.enemyTypes[enemyTypes.counter] = new EnemyFactory(enemyTypes.counter, 2, weapons.weapons[5], 1, 10, "horizontal", "oeil2", sbireAnimations5, 50, 125);
enemyTypes.counter++;

enemyTypes.enemyTypes[enemyTypes.counter] = new EnemyFactory(enemyTypes.counter, 2, weapons.weapons[6], 1, 10, "horizontal", "bomb2", sbireAnimations6, 50, 70);
enemyTypes.counter++;
//end level 2--------------

//level 3------------------
enemyTypes.enemyTypes[enemyTypes.counter] = new EnemyFactory(enemyTypes.counter, 3, weapons.weapons[7], 1, 10, "horizontal", "champi3", sbireAnimations7, 65, 142);
enemyTypes.counter++;

enemyTypes.enemyTypes[enemyTypes.counter] = new EnemyFactory(enemyTypes.counter, 3, weapons.weapons[8], 1, 10, "horizontal", "oeil3", sbireAnimations8, 62, 156);
enemyTypes.counter++;

enemyTypes.enemyTypes[enemyTypes.counter] = new EnemyFactory(enemyTypes.counter, 3, weapons.weapons[9], 1, 10, "horizontal", "bomb3", sbireAnimations9, 70, 79);
enemyTypes.counter++;
//end level 3 ------------

//MiniBoss ---------------
enemyTypes.enemyTypes[enemyTypes.counter] = new EnemyFactory(enemyTypes.counter, 5, weapons.weapons[10], 1, 10, "horizontal", "ungrycat", sbireAnimations10, 70, 79);
enemyTypes.counter++;

enemyTypes.enemyTypes[enemyTypes.counter] = new EnemyFactory(enemyTypes.counter, 5, weapons.weapons[11], 1, 10, "horizontal", "bobzombie", sbireAnimations11, 70, 79);
enemyTypes.counter++;

enemyTypes.enemyTypes[enemyTypes.counter] = new EnemyFactory(enemyTypes.counter, 5, weapons.weapons[12], 1, 10, "horizontal", "warboat", sbireAnimations12, 70, 79);
enemyTypes.counter++;
//end MiniBoss------------

//BOSS -------------------
enemyTypes.enemyTypes[enemyTypes.counter] = new EnemyFactory(enemyTypes.counter, 140, weapons.weapons[13], 1, 15, "updown", "manudavidson", sbireAnimations13, 150, 222);
enemyTypes.counter++;

enemyTypes.enemyTypes[enemyTypes.counter] = new EnemyFactory(enemyTypes.counter, 70, weapons.weapons[14], 1, 15, "updown", "javalex", sbireAnimations14, 150, 174);
enemyTypes.counter++;
//end BOSS