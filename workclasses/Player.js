function Player()
{
    this.id = 0;
    this.currentDamage;
    this.weapon = weapons.weapons[0];
    this.dead = false;
    
    //Animations
    this.animations = {
        base : new $.gameQuery.Animation({
            imageURL : fileNames.snake,
            numberOfFrame : 10, // nous avons ici 4 frames
            delta : 40, // on définit la largeur d'une frame à 40px
            rate : 100, // 100ms séparent chaque frame
            type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
        }),
    
        attack : new $.gameQuery.Animation({
            imageURL : fileNames.snakeAttack,
            numberOfFrame : 6, // nous avons ici 4 frames
            delta : 40, // on définit la largeur d'une frame à 40px
            rate : 100, // 100ms séparent chaque frame
            type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
        }),
    
        death : new $.gameQuery.Animation({
            imageURL : fileNames.snakeDeath,
            numberOfFrame : 2, // nous avons ici 4 frames
            delta : 150, // on définit la largeur d'une frame à 40px
            rate : 200, // 100ms séparent chaque frame
            type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
        })
    }
    
    //id, health, basicDamage, speed, type, animation, left, top, width, height
    this.character = new Character(this.id, 30, 1, 20, "player", this.animations, 490, 568, 40, 200);
        
    this.attack = function() {
        
        //Anim
        this.setAnimation("attack", 600);
        
        //Bullet
        var bulletLeft = this.character.element.left + (this.character.element.width / 2) - (this.weapon.width / 2);
        var bulletTop = this.character.element.top ;//- (this.weapon.height);
        
        this.weapon.attack(bulletLeft, bulletTop, this.character.type);
    }
    
    this.setAnimation = function(animationName, duration){
        this.character.setAnimation(animationName, duration);
    }
    
    this.move = function(direction) {
        this.character.move(direction);
    }
    this.draw = function() {
        this.character.draw();
    }
}
