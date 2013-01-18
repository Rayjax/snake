function Weapon(id, damage, weaponType, bulletsDirection, speed, animations, width, height)
{
    this.id = id;
    this.damage = damage;
    this.weaponType = weaponType;
    this.bulletsDirection = bulletsDirection;
    this.speed = speed;
    this.animations = animations;
    this.width = width;
    this.height = height;
   
    this.attack = function(left, top, shooterType)
    {
        /* switch(this.weaponType)
        {
            case "poison" :*/

        bullets.bullets[bullets.counter] = new Bullet(bullets.counter, this.damage, this.weaponType, shooterType, this.bulletsDirection, this.speed, "bullet", this.animations, left, top, this.width, this.height);
        bullets.bullets[bullets.counter].setAnimation("base", 0);
        bullets.bullets[bullets.counter].draw();
                
        bullets.counter++;
    /* break;
            case "enemyAttack1" :
                bullets.bullets[bullets.counter] = new Bullet(bullets.counter, this.weaponType, this.bulletsDirection, this.speed, "bullet", this.animations, left, top, this.width, this.height);
                bullets.bullets[bullets.counter].setAnimation("base", 0);
                bullets.bullets[bullets.counter].draw();
                
                bullets.counter++;
                break;
            
            default :
                break;
    }*/
    }
}