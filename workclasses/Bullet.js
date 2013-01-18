function Bullet(id, damage, weaponType, shooterType, bulletDirection, speed, type, animations, left, top, width, height)
{
    this.id = id;
    this.damage = damage;
    this.weaponType = weaponType;
    this.shooterType = shooterType;
    this.bulletDirection = bulletDirection;

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