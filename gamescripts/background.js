//Background scrolling
var background = {
    backgroundSlideSize : 5,
    backgroundSlideSpeed : 20
};

var background1 = new $.gameQuery.Animation({
    imageURL : fileNames.background1
});

$('#background')
    .addSprite('background1', {
        animation : background1,
        height : playground.h*2,
        width : playground.w
    });
    
var top = $("#background1").css("top", -playground.h);
    
$playground.playground()
    .registerCallback(function(){

        var top = parseInt(($("#background1").css("top")))  + background.backgroundSlideSize; 
        
        if(top >= 0)
        {
            top = -playground.h;
        }
        $("#background1").css("top", top);
      
    }, background.backgroundSlideSpeed);