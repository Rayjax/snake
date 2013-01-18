function Element(id, speed, type, animations, left, top, width, height)
{
    this.id = id;
    this.type = type;
    this.speed = speed;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.exists = true;
   
    //Default animation
    this.animations = animations; 

    this.currentAnimation = this.animation;

    $playground.playground()
    .addSprite(this.type + this.id, {
        animation : this.animations.base, // on lance l'animation
        width : this.width,
        height : this.height // on définit les dimensions de notre personnage
    });
    
    $('#' + this.type + this.id).setAnimation(this.animation);
    
    //Définit l'animation reçue pour la durée reçue
    this.setAnimation = function(animationName, duration){
        if(elementsManager.checkElementExists(this.type, this.id))
        {
            var animation = this.animations.base;
        
            if(animationName == "attack")
            {
                animation = this.animations.attack; 
            }
            else if(animationName == "death")
            {
                animation = this.animations.death; 
            }
        
            $('#' + this.type + this.id).setAnimation(animation);
            this.currentAnimation = animation;
    
            //Si ce n'est pas une animation infinie
            if(duration > 0)
            {
                var _this = this;
                setTimeout(function() {
                    _this.stopAnimation(_this.type + _this.id, _this.animations.base)
                }, duration);

                this.currentAnimation = this.animations.base;
            }
        }
    }

    //Remettre animation de base
    this.stopAnimation =  function(id, animation){ 
        $('#' + id).setAnimation(animation);
    }

    //Move
    this.move = function(direction) {
       
        //Direction
        if(direction == "top")
        {
            this.top -= this.speed;
        }
        if(direction == "bottom")
        {
            this.top += this.speed;
        }
        
        if(direction == "right")
        {
            this.left += this.speed;
        }
        if(direction == "left")
        {
            this.left -= this.speed;
        }
        
        //Limits
        if(this.top <= 0 - this.height)
        {
            elementsManager.deleteElement(this.type, this.id);
        }
        else if(this.top >= playground.h)
        {
            elementsManager.deleteElement(this.type, this.id);
        }
        else if(this.left >= (playground.w - this.width))
        {
            this.left = (playground.w - this.width);
        }
        else if(this.left <= 0)
        {
            this.left = 0;
        }
    }
    
    //Draw
    this.draw = function() {
        $('#' + this.type + this.id).css("left", this.left);
        $('#' + this.type + this.id).css("top", this.top);
    }
}