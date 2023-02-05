/**
 * classe de la balle(Ball)
 * représente la balle dans la scene 
 */
class Ball extends Sprite {
    /**
      * constructeur de Ball
      * @param {String} id représente des l'id de la balise de la balle
      * @param {String} type  représente des la classe de la balise de la balle
      * @param {Position} topLeft la position de la balle dans la scene 
      * @param {Movement} movement le mouvement de la balle
      * @param {Color} color la couleur de la balle
      * @param {Dimension} dimension la dimension de la balle  
      */
    constructor(id, type, topLeft, movement, color, dimension) {
        super(id, type, topLeft, dimension);
        this._color = color;
        this._movement = movement;
    }


    /**
     * getter de movement 
     */
    get movement() {
        return this._movement;
    }

    /**
    * getter de color 
    */
    get color() {
        return this._color;
    }

    /**
    * setter de color
    */
    set color(valeur) {
        this._color = valeur;
    }

    /**
     * permet de déplacer la balle
     *
     */
    move() {
        this._topLeft.x = this.noExceedingX(this._topLeft.x) + this._movement.deltaX;
        this._topLeft.y = this.noExceedingy(this._topLeft.y) + this._movement.deltaY;

    }

    /**
      * permet d'empecher que la balle ne déborde de la scene en haut change la couleur de la balle à chaque collision 
      * de la balle et inverse le mouvement de la balle 
      * @param {y} topLeftY le y de l'attribut (Position) topLeft
      * @returns {y} topLeftY 0 si la balle est en dehors de la scene vers le haut, 
      *  et la valeur de topLefty
      * dans les cas ou la balle ne déborde pas 
      */
    noExceedingy(topLeftY) {

        if (topLeftY < 0) {

            this._movement.reverseY();


            this.TouchWalls();
            return 0;
        }
        else {
            return topLeftY;


        }

    }

    /**
     * permet de changer la couleur de la balle 
     */
    TouchWalls() {

        view.changerCouleur(this);

    }



}