//Collision management
var collision = {
    checkGameCollisions : function()
    {
        bullets.bullets.forEach(function(bullet, i) {
            if(bullet.shooterType == "player")
            {
                enemies.enemies.forEach(function(enemy, j) {
                    if(collision.checkCollision("enemy" + j, "bullet" + i, "top", "medium"))
                    {
                        enemy.character.health -= bullet.damage;
                        if(enemy.character.health <= 0)
                        {
                            elementsManager.deleteElement("enemy", j);
                            if(enemy.typeEnnemi == "manudavidson")
                            {
                                loop.endMessage = "Bien joué ! Vous avez terminé la version démo. Bientôt plein de nouveautés !";
                                loop.endOfTheGame = true;
                            }
                        }
                        elementsManager.deleteElement("bullet", i);
                    }
                });
            }
            else if(bullet.shooterType == "enemy")
            {
                if(collision.checkCollision("player0", "bullet" + i, "bottom", "small"))
                {
                    player.character.health -= bullet.damage;
                    if(player.character.health <= 0)
                    {
                        //End of the game
                        player.setAnimation("death", 0);
                        $("#player0").css("width", 150);
                        loop.endOfTheGame = true;
                    }
                    elementsManager.deleteElement("bullet", i);
                }
            }
            bonuses.bonus.forEach(function(bonus, i) {
                if(collision.checkCollision("player0", "bonus" + i))
                {
                    bonuses.applyBonus(bonus.bonusType);
                    elementsManager.deleteElement("bonus", i);
                }
            });
        });
    },
    checkCollision : function (a, b, impactPosition, impactSize)
    {   
        var collision = false,
        aleft = parseInt($('#'+ a).css('left')),
        atop = parseInt($('#'+ a).css('top')),
        aright = parseInt($('#'+ a).css('left')) + parseInt($('#'+ a).css('width')),
        abot = parseInt($('#'+ a).css('top')) + parseInt($('#'+ a).css('height')),
                            
        bleft = parseInt($('#'+ b).css('left')),
        btop = parseInt($('#'+ b).css('top')),
        bwidth = parseInt($('#'+ b).css('width')),
        bright = parseInt($('#'+ b).css('left')) + bwidth,
        bheight = parseInt($('#'+ b).css('height')),
        bbot = parseInt($('#'+ b).css('top')) + bheight;
    
        if (aleft < bright && aright > bleft &&
            atop < bbot && abot > btop) 
            {
            collision = true;
            if(impactPosition == "top")
            {
                impacts.createImpact(bleft+ (bwidth/2), btop, impactSize);
            }
            else if(impactPosition == "bottom")
            {
                impacts.createImpact(bleft+ (bwidth/2), bbot, impactSize);
            }
        }
        
        return collision;
    }
};
