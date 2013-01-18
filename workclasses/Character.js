function Character(id, health, basicDamage, speed, type, animations, left, top, width, height)
{
    this.health = health;
    this.basicDamage = basicDamage;
    this.type = type;

    this.element = new Element(id, speed, type, animations, left, top, width, height);
    
    this.setAnimation = function(animation, duration){
        this.element.setAnimation(animation, duration);
    }
    
    this.move = function(direction) {
        this.element.move(direction);
    }
    
    this.draw = function() {
        this.element.draw();
    }
}
