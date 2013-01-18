//Enemy management
var enemies = {
    enemies : new Array(),
    counter : 0,
    moveEnemies : function (direction)
    {
        enemies.enemies.forEach(function(enemy, i) {
            enemy.move(direction);
        });
    },
    moveEnemy : function (enemyid, direction)
    {
        enemies.enemies[enemyid].move(direction);
    },
    drawEnemies : function ()
    {
        enemies.enemies.forEach(function(enemy, i) {
            enemy.draw();
        });
    },
    enemiesAttack : function()
    {
        enemies.enemies.forEach(function(enemy, i) {
            enemy.attack();
        });
    },
    counterEnemy : 0
};