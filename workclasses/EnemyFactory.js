function EnemyFactory(id, health, weapon, damage, speed, moveSequence, enemyType, animations, width, height)
{
    this.id = 0;
    this.health = health;
    this.weapon = weapon;
    this.damage = damage;
    this.speed = speed;
    this.moveSequence = moveSequence;
    this.enemyType = enemyType;
    this.animations = animations;
    this.width = width;
    this.height = height;

    this.spawnEnemy = function(left, top, direction)
    {

        if((this.enemyType != "javalex" && this.enemyType != "manudavidson") || (this.enemyType == "javalex" && !alexSpawned) || (this.enemyType == "manudavidson" && !manuSpawned))

        {
            if(this.enemyType == "javalex")
            {
                alexSpawned = true;
            }
            if(this.enemyType == "manudavidson")
            {
                manuSpawned = true;
            }
            //(id, health, basicDamage, speed, type, animation, left, top, width, height)
            enemies.enemies[enemies.counter] = new Enemy(enemies.counter, this.health, this.weapon, this.speed, this.moveSequence, direction, this.enemyType, this.animations, left, top, this.width, this.height);
            enemies.enemies[enemies.counter].setAnimation("base", 0);
            enemies.enemies[enemies.counter].draw();
                
            enemies.counter++;
        }
    }
}