/**
 * classe de la raquette (Paddle)
 * Represente la raquette dans la scene
 *
 */

class Paddle extends Sprite {

    /**
     * constructeur de paddle
     * @param {String} id représente des l'id de la balise du sprite
     * @param {String} type  représente des la classe de la balise du sprite
     * @param {Position} topLeft la position du sprite dans la scene 
     * @param {Dimension} dimension la dimension du sprite 
     */
    constructor(id, type, topLeft, dimension) {
        super(id, type, topLeft, dimension);
    }



    /**
     * permet de déplacer le paddle 
     * @param {left} left le x de la position paddle 
     */
    moveTo(x) {

        this._topLeft.x = this.noExceedingX(x);

    }


}



