//Defines different types of bonuses
var bonusType = {
    bonusType : new Array(),
    counter : 0
};
var healingItem = {
    base : new $.gameQuery.Animation({
        imageURL : fileNames.souris,
        numberOfFrame : 2, // nous avons ici 4 frames
        delta : 35, // on définit la largeur d'une frame à 40px
        rate : 100, // 100ms séparent chaque frame
        type : $.gameQuery.ANIMATION_HORIZONTAL // on passe une constante en valeur
    })
}
bonusType.bonusType[bonusType.counter] = new BonusFactory(bonusType.counter, 10,10 , "healing", healingItem, 100, 50, 35, 79);
bonusType.counter++;