//Bullets management
var bullets = {
    bullets : new Array(),
    counter : 0,
    moveBullets : function ()
    {
        bullets.bullets.forEach(function(bullet, i) {
            bullet.move(bullet.bulletDirection);
        });
    },
    drawBullets : function ()
    {
        bullets.bullets.forEach(function(bullet, i) {
            bullet.draw();
        });
    }
};
