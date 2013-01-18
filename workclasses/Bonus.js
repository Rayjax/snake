function Bonus(id, speed, bonusType, type, animations, left, top, width, height)
{
    this.bonusType = bonusType;

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
