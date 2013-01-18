//Impact management
var impacts = {
    impactCounter : 0,
    impactChrono : new Array(),
    createImpact : function(left,top,size){
        if(size == "big")
        {
            var bombAnimations = {
                base : new $.gameQuery.Animation({
                    imageURL : fileNames.explosionBig,
                    numberOfFrame : 3, // nous avons ici 4 frames
                    delta : 100, // on définit la largeur d'une frame à 40px
                    rate : 150, // 100ms séparent chaque frame
                    type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
                })
            }
            $playground.playground()
            .addSprite("impact" + impacts.impactCounter, {
                animation : bombAnimations.base, // on lance l'animation
                width : 100,
                height : 100
            });
            $("#impact" + impacts.impactCounter).css("left", left);
            $("#impact" + impacts.impactCounter).css("top", top);
            impacts.impactChrono[impacts.impactCounter] = loop.loopCounter;
        }
        else if(size == "medium")
        {
            var bombAnimations = {
                base : new $.gameQuery.Animation({
                    imageURL : fileNames.explosionMedium,
                    numberOfFrame : 3, // nous avons ici 4 frames
                    delta : 50, // on définit la largeur d'une frame à 40px
                    rate : 150, // 100ms séparent chaque frame
                    type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
                })
            }
            $playground.playground()
            .addSprite("impact" + impacts.impactCounter, {
                animation : bombAnimations.base, // on lance l'animation
                width : 50,
                height : 50
            });
            $("#impact" + impacts.impactCounter).css("left", left);
            $("#impact" + impacts.impactCounter).css("top", top);
            impacts.impactChrono[impacts.impactCounter] = loop.loopCounter;
        }
        else
        {
            var bombAnimations = {
                base : new $.gameQuery.Animation({
                    imageURL : fileNames.explosionSmall,
                    numberOfFrame : 3, // nous avons ici 4 frames
                    delta : 25, // on définit la largeur d'une frame à 40px
                    rate : 150, // 100ms séparent chaque frame
                    type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
                })
            }
            $playground.playground()
            .addSprite("impact" + impacts.impactCounter, {
                animation : bombAnimations.base, // on lance l'animation
                width : 25,
                height : 25
            });
            $("#impact" + impacts.impactCounter).css("left", left);
            $("#impact" + impacts.impactCounter).css("top", top);
            impacts.impactChrono[impacts.impactCounter] = loop.loopCounter;
        }
        impacts.impactCounter++;
    },
    cleanImpacts : function(){
        impacts.impactChrono.forEach(function(chrono, i) {
            //alert(chrono);
            if(chrono + 9 == loop.loopCounter )
            {
                elementsManager.deleteElement("impact", i)
            }
        });
    }
}