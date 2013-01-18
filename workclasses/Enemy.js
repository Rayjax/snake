function Enemy(id, health, weapon, speed, moveSequence, direction, typeEnnemi, animation, left, top, width, height)
{
    this.id = id;
    this.currentDamage;
    this.typeEnnemi = typeEnnemi;
    this.weapon = weapon;
    this.moveSequence = moveSequence;
    this.currentDirection = direction;
    this.moveCounter = 0;
    this.moveCounterLimit = 10;
    
    enemies.counterEnemy++;
    
    //id, health, basicDamage, speed, type, animation, left, top, width, height
    this.character = new Character(this.id, health, 0, speed, "enemy", animation, left, top, width, height);
        
    this.attack = function() {
        //Anim
        //this.setAnimation("attack", 500);
        
        //Bullet
        var bulletLeft = this.character.element.left + (this.character.element.width / 2) - (this.weapon.width / 2);
        var bulletTop = this.character.element.top + (this.character.element.height);
        
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
