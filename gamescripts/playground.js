//Game main area
var playground = {
    h : 768,
    w : 1024
};

var $playground = $('#playground');

$playground.playground({
    height : playground.h,
    width : playground.w
})

$playground.playground()
    .addGroup('background', {
        height : playground.h, 
        width : playground.w
    })
    .end() 
    .addGroup('player', {
        height : playground.h, 
        width : playground.w
    });