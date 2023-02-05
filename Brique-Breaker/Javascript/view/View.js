/**
 *classe de la vue (View)
 * La vue permet l'affichage l'interaction avec l'utilisateur. 
 * 
*/
class View {
  

    /**
    * calcule la distance entre le bord gauche de la fenetre et de la scene
    */
    sceneLeft() {

        return $("#scene").offset().left;


    }

    /**
     * permet de changer la couleur de la balle ou d'une brique 
     * @param {Ball} ball balle ou brique 
     */
    changerCouleur(ball) {
        let numColor = ball.color;
        numColor++;
        if (numColor > COLOR.length - 1)
            numColor = 0;
        ball.color = numColor;
        $("#ball").css("background-color", color.donneCouleur(ball.color));


    }


    /**
     * permet de changer la couleur de la balle ou d'une brique 
     * @param {Sprite} sprite balle ou brique 
     */
    changerCouleurBrick(sprite) {
        let numColor = sprite.color;
        numColor++;
        if (numColor > COLOR.length - 1)
            numColor = 0;
        sprite.color = numColor;
        $(".brick").css("background-color", color.donneCouleur(sprite.color));


    }







    /**
     * permet d'ajouter un sprite à la scene
     * @param {Sprite} sprite 
     */
    add(sprite) {
        $("#scene").prepend('<span id="' + sprite.id + '"  class="' + sprite.type + '"  > </span> ');


    }

    /**
     * permet de mettre a jour la vue d'un Sprite 
     * @param {Sprite} sprite 
     */
    update(sprite) {

        $('#' + sprite.id).css("left", sprite.topLeft.x);
        $('#' + sprite.id).css("top", sprite.topLeft.y);
        $('#' + sprite.id).css("width", sprite.dimension.width);
        $('#' + sprite.id).css("height", sprite.dimension.height);
        $("#ball").css("background-color", color.donneCouleur(sprite.color));

       
    }


    /**
     * permet d'afficher le mur de brique dans la scene
     * @param {} sprites un mur de brique
     */
    addAll(sprites) {

        for (let i = 0; i < sprites.length; i++) {

            let bricks = $('<span class="brick"></span>');
            let brick = sprites[i];
            $(bricks).attr("id", brick.id);
            $(bricks).css("left", brick.topLeft.x);
            $(bricks).css("top", brick.topLeft.y);
            $("#scene").append(bricks);
            $('#' + sprites[i].id).css("width", brick.dimension.width - 1);
            $('#' + sprites[i].id).css("height", brick.dimension.height - 1);
            
        }
    }

    /**
     * permet de retirer les briques du tableaux donner en paramètre de la page 
     * @param {} brickArray 
     */
    deleteBrickArray(brickArray) {

        for (let i = 0; i < brickArray.length; i++) {

            $("#" + brickArray[i].id).remove();
        }
    }

    /**
     * permet d'afficher le score du joueur 
     */
    displayScore() {
        $("#scene").before('<span id="score" >0</span> ');
    }

    /**
     * permet de mettre à jour le score 
     * @param {*} score 
     */
    updateScore(score) {
        $("#score").html(score);


    }



    /**
     * permet d'afficher un message  
     * @param {String} message le message a afficher
     */
    showStart(message) {
        $("#scene").append('<span id="startGame">' + message + '</span>');


    }

    /**
     * permet de cacher le message quand le jeu commence
     */
    hideStart() {
        $("#startGame").hide();


    }

    /**
     * affiche game over
     */
    displayGameOver(){
        $("#scene").append('<span id="startGame">GAME OVER</span>');

    }

    /**
     * affiche you win
     */
    displayWin(){

        $("#scene").append('<span id="startGame">YOU WIN</span>');

    }

    /**
     * permet d'afficher le nombre de vie
     */
    displayLife(){
        $("#scene").before('<span id="life" ></span> ');

      
    }

     /**
     * permet de mettre à jour le nbr de vie
     *  @param {Number} nbLifes
     */
    updateLife(nbLifes) {
        this.emptyLife();
        for(let i=0;i<nbLifes;i++){
            $("#life").append("🖤");
            }
    }

    /**
     * permet de remettre les vies à 0
     */
    emptyLife(){
        $("#life").empty();


    }

     /**
     * permet d'afficher le level
     */
    displayLevel(level) {
        $("#scene").before('<span id="level" >Level '+level+'</span> ');
    }


    /**
     * permet de changer l'affichage du niveaux 
     * @param {Number} level 
     */
    updateLevel(level) {
        $("#level").empty();
       
            $("#life").append("Level"+ level);
            
    }

    /**
     * permet de changer la couleur des briques 
     */
  bonusDisplay(){

    $(".brick").css("background-color", color.donneCouleur(2));
  


  }

  /**
   * permet d'afficher le nombre de seconde écoulé à la fin de la partie 
   */
  displayLapsTime(){

   let min= $("#minutes").text();
   let sec= $("#seconds").text();
   $("#minutes").hide()
   $("#seconds").hide();
   $("#time").hide();
   $("#scene").before(' <span id="time"> <span id="minutes">'+min+'</span>:<span id="seconds">'+sec+'</span></span>');

  }





 
}





