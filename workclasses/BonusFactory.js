function BonusFactory(id, speed, health, bonusType, animations, left, top, width, height)
{
    this.id = id;
    this.health = health;
    this.bonusType = bonusType;
    this.speed = speed;
    this.animations = animations;
    this.width = width;
    this.height = height;

    this.spawnBonus = function(left, top, direction)
    {
        //ttodo : change "enemies!"
        //id, speed, type, animations, left, top, width, height
        bonuses.bonus[this.id] = new Bonus(this.id, this.speed, bonusType, "bonus", this.animations, left, top, this.width, this.height);
        bonuses.bonus[this.id].setAnimation("base", 0);
        bonuses.bonus[this.id].draw();
                
        bonuses.counter++;
    }
}