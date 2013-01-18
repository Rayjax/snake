//Weapon configurations
var weapons = {
    weapons : new Array(),
    counter : 0
};

//Initialisation des armes

//Poison
var poisonAnimations = {
    base : new $.gameQuery.Animation({
        imageURL : fileNames.bulletPoison,
        numberOfFrame : 2, // nous avons ici 4 frames
        delta : 28, // on définit la largeur d'une frame à 40px
        rate : 200, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    }),
    
    explode : new $.gameQuery.Animation({
        imageURL : fileNames.bulletPoison,
        numberOfFrame : 1, // nous avons ici 4 frames
        delta : 50, // on définit la largeur d'une frame à 40px
        rate : 100, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    })
}
var champi1Animations = {
    base : new $.gameQuery.Animation({
        imageURL : fileNames.bulletLittleBomb,
        numberOfFrame : 2, // nous avons ici 4 frames
        delta : 25, // on définit la largeur d'une frame à 40px
        rate : 200, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    }),
    
    explode : new $.gameQuery.Animation({
        imageURL : fileNames.bulletLittleBomb,
        numberOfFrame : 1, // nous avons ici 4 frames
        delta : 50, // on définit la largeur d'une frame à 40px
        rate : 100, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    })
}
var champi2Animations = {
    base : new $.gameQuery.Animation({
        imageURL : fileNames.bulletLittleBomb,
        numberOfFrame : 2, // nous avons ici 4 frames
        delta : 25, // on définit la largeur d'une frame à 40px
        rate : 200, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    }),
    
    explode : new $.gameQuery.Animation({
        imageURL : fileNames.bulletLittleBomb,
        numberOfFrame : 1, // nous avons ici 4 frames
        delta : 50, // on définit la largeur d'une frame à 40px
        rate : 100, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    })
}
var champi3Animations = {
    base : new $.gameQuery.Animation({
        imageURL : fileNames.bulletLittleBomb,
        numberOfFrame : 2, // nous avons ici 4 frames
        delta : 25, // on définit la largeur d'une frame à 40px
        rate : 200, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    }),
    
    explode : new $.gameQuery.Animation({
        imageURL : fileNames.bulletLittleBomb,
        numberOfFrame : 1, // nous avons ici 4 frames
        delta : 50, // on définit la largeur d'une frame à 40px
        rate : 100, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    })
}
var oeil1Animations = {
    base : new $.gameQuery.Animation({
        imageURL : fileNames.bulletLittleBomb,
        numberOfFrame : 2, // nous avons ici 4 frames
        delta : 25, // on définit la largeur d'une frame à 40px
        rate : 200, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    }),
    
    explode : new $.gameQuery.Animation({
        imageURL : fileNames.bulletLittleBomb,
        numberOfFrame : 1, // nous avons ici 4 frames
        delta : 50, // on définit la largeur d'une frame à 40px
        rate : 100, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    })
}
var oeil2Animations = {
    base : new $.gameQuery.Animation({
        imageURL : fileNames.bulletLittleBomb,
        numberOfFrame : 2, // nous avons ici 4 frames
        delta : 25, // on définit la largeur d'une frame à 40px
        rate : 200, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    }),
    
    explode : new $.gameQuery.Animation({
        imageURL : fileNames.bulletLittleBomb,
        numberOfFrame : 1, // nous avons ici 4 frames
        delta : 50, // on définit la largeur d'une frame à 40px
        rate : 100, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    })
}
var oeil3Animations = {
    base : new $.gameQuery.Animation({
        imageURL : fileNames.bulletLittleBomb,
        numberOfFrame : 2, // nous avons ici 4 frames
        delta : 25, // on définit la largeur d'une frame à 40px
        rate : 200, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    }),
    
    explode : new $.gameQuery.Animation({
        imageURL : fileNames.bulletLittleBomb,
        numberOfFrame : 1, // nous avons ici 4 frames
        delta : 50, // on définit la largeur d'une frame à 40px
        rate : 100, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    })
}
var bomb1Animations = {
    base : new $.gameQuery.Animation({
        imageURL : fileNames.bulletLittleBomb,
        numberOfFrame : 2, // nous avons ici 4 frames
        delta : 25, // on définit la largeur d'une frame à 40px
        rate : 200, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    }),
    
    explode : new $.gameQuery.Animation({
        imageURL : fileNames.bulletLittleBomb,
        numberOfFrame : 1, // nous avons ici 4 frames
        delta : 50, // on définit la largeur d'une frame à 40px
        rate : 100, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    })
}
var bomb2Animations = {
    base : new $.gameQuery.Animation({
        imageURL : fileNames.bulletLittleBomb,
        numberOfFrame : 2, // nous avons ici 4 frames
        delta : 25, // on définit la largeur d'une frame à 40px
        rate : 200, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    }),
    
    explode : new $.gameQuery.Animation({
        imageURL : fileNames.bulletLittleBomb,
        numberOfFrame : 1, // nous avons ici 4 frames
        delta : 50, // on définit la largeur d'une frame à 40px
        rate : 100, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    })
}
var bomb3Animations = {
    base : new $.gameQuery.Animation({
        imageURL : fileNames.bulletLittleBomb,
        numberOfFrame : 2, // nous avons ici 4 frames
        delta : 25, // on définit la largeur d'une frame à 40px
        rate : 200, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    }),
    
    explode : new $.gameQuery.Animation({
        imageURL : fileNames.bulletLittleBomb,
        numberOfFrame : 1, // nous avons ici 4 frames
        delta : 50, // on définit la largeur d'une frame à 40px
        rate : 100, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    })
}
var ungrycatAnimations = {
    base : new $.gameQuery.Animation({
        imageURL : fileNames.bulletLittleBomb,
        numberOfFrame : 2, // nous avons ici 4 frames
        delta : 25, // on définit la largeur d'une frame à 40px
        rate : 200, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    }),
    
    explode : new $.gameQuery.Animation({
        imageURL : fileNames.bulletLittleBomb,
        numberOfFrame : 1, // nous avons ici 4 frames
        delta : 50, // on définit la largeur d'une frame à 40px
        rate : 100, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    })
}
var bobAnimations = {
    base : new $.gameQuery.Animation({
        imageURL : fileNames.bulletLittleBomb,
        numberOfFrame : 2, // nous avons ici 4 frames
        delta : 25, // on définit la largeur d'une frame à 40px
        rate : 200, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    }),
    
    explode : new $.gameQuery.Animation({
        imageURL : fileNames.bulletLittleBomb,
        numberOfFrame : 1, // nous avons ici 4 frames
        delta : 50, // on définit la largeur d'une frame à 40px
        rate : 100, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    })
}
var boatAnimations = {
    base : new $.gameQuery.Animation({
        imageURL : fileNames.bulletLittleBomb,
        numberOfFrame : 2, // nous avons ici 4 frames
        delta : 25, // on définit la largeur d'une frame à 40px
        rate : 200, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    }),
    
    explode : new $.gameQuery.Animation({
        imageURL : fileNames.bulletLittleBomb,
        numberOfFrame : 1, // nous avons ici 4 frames
        delta : 50, // on définit la largeur d'une frame à 40px
        rate : 100, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    })
}
var manuAnimations = {
    base : new $.gameQuery.Animation({
        imageURL : fileNames.bulletLittleBomb,
        numberOfFrame : 2, // nous avons ici 4 frames
        delta : 25, // on définit la largeur d'une frame à 40px
        rate : 200, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    }),
    
    explode : new $.gameQuery.Animation({
        imageURL : fileNames.bulletLittleBomb,
        numberOfFrame : 1, // nous avons ici 4 frames
        delta : 50, // on définit la largeur d'une frame à 40px
        rate : 100, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    })
}
var alexAnimations = {
    base : new $.gameQuery.Animation({
        imageURL : fileNames.bulletLittleBomb,
        numberOfFrame : 2, // nous avons ici 4 frames
        delta : 25, // on définit la largeur d'une frame à 40px
        rate : 200, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    }),
    
    explode : new $.gameQuery.Animation({
        imageURL : fileNames.bulletLittleBomb,
        numberOfFrame : 1, // nous avons ici 4 frames
        delta : 50, // on définit la largeur d'une frame à 40px
        rate : 100, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    })
}
//(id, damage, weaponType, bulletsDirection, speed, animations, width, height)
weapons.weapons[weapons.counter] = new Weapon(weapons.counter, 1,  "poison", "top", 40, poisonAnimations, 28, 50);
weapons.counter++;

weapons.weapons[weapons.counter] = new Weapon(weapons.counter, 1, "enemyAttack1", "bottom", 40, champi1Animations, 25, 54);
weapons.counter++;

weapons.weapons[weapons.counter] = new Weapon(weapons.counter, 1, "enemyAttack2", "bottom", 40, oeil1Animations, 25, 54);
weapons.counter++;

weapons.weapons[weapons.counter] = new Weapon(weapons.counter, 2, "enemyAttack3", "bottom", 40, bomb1Animations, 25, 54);
weapons.counter++;

weapons.weapons[weapons.counter] = new Weapon(weapons.counter, 2, "enemyAttack4", "bottom", 40, champi2Animations, 25, 54);
weapons.counter++;

weapons.weapons[weapons.counter] = new Weapon(weapons.counter, 2, "enemyAttack5", "bottom", 40, oeil2Animations, 25, 54);
weapons.counter++;

weapons.weapons[weapons.counter] = new Weapon(weapons.counter,3, "enemyAttack6", "bottom", 40, bomb2Animations, 25, 54);
weapons.counter++;

weapons.weapons[weapons.counter] = new Weapon(weapons.counter, 3, "enemyAttack7", "bottom", 40, champi3Animations, 25, 54);
weapons.counter++;

weapons.weapons[weapons.counter] = new Weapon(weapons.counter, 3, "enemyAttack8", "bottom", 40, oeil3Animations, 25, 54);
weapons.counter++;

weapons.weapons[weapons.counter] = new Weapon(weapons.counter, 4, "enemyAttack9", "bottom", 40, bomb3Animations, 25, 54);
weapons.counter++;

weapons.weapons[weapons.counter] = new Weapon(weapons.counter, 4, "enemyAttack10", "bottom", 40, ungrycatAnimations, 25, 54);
weapons.counter++;

weapons.weapons[weapons.counter] = new Weapon(weapons.counter, 4, "enemyAttack11", "bottom", 40, boatAnimations, 25, 54);
weapons.counter++;

weapons.weapons[weapons.counter] = new Weapon(weapons.counter, 4, "enemyAttack12", "bottom", 40, boatAnimations, 25, 54);
weapons.counter++;

weapons.weapons[weapons.counter] = new Weapon(weapons.counter, 5, "enemyAttack13", "bottom", 40, manuAnimations, 25, 54);
weapons.counter++;

weapons.weapons[weapons.counter] = new Weapon(weapons.counter, 5, "enemyAttack14", "bottom", 40, alexAnimations, 25, 54);
weapons.counter++;

