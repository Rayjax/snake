//Contains methods to manage(delete, check existence...) all of the game elements (player, enemies, bullets, bonuses) at a graphical and logical level
var elementsManager = {
    deleteElement : function(type, id){
        //Graphics
        $("#" + type + id).remove();
        
        //Data
        if(type == "bullet"){
            delete bullets.bullets[id];
        }
        else if(type == "enemy"){
            enemies.counterEnemy--;
            delete enemies.enemies[id];
        }
        else if(type == "impact"){
            delete impacts.impactChrono[id];
        }
        else if(type == "player"){
            player.dead = true;
        }
        else if(type == "bonus"){
            delete bonuses.bonus[id];
        }
    },
    checkElementExists : function(type, id){
        var exists = true;
        //Data
        if(type == "bullet"){
            if(bullets.bullets[id] === undefined )
            {
                exists = false;
            }
        }
        else if(type == "enemy"){
            if(enemies.enemies[id] === undefined )
            {
                exists = false;
            }
        }
        else if(type == "player"){
            if(player.dead)
            {
                exists = false;
            }
        }
        return exists;
    }
}