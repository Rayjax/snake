//Bonus management
var bonuses = {
    bonus : new Array(),
    counter : 0,
    moveBonus : function ()
    {
        bonuses.bonus.forEach(function(bonus, i) {
            bonus.move("bottom");
        });
    },
    drawBonus : function ()
    {
        bonuses.bonus.forEach(function(bonus, i) {
            bonus.draw();
        });
    },
    applyBonus : function(bonus)
    {
        switch(bonus){
            case "healing": 
                player.character.health += 3;
                break;
            default:
                break;
        }
    }
};