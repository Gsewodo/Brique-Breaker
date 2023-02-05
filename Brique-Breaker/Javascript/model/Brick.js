/**
 * la classe Brick représente chaque brick du mur dans la scene 
 */
class Brick extends Sprite {

    /**
     * constructeur de sprite
     * @param {String} id représente des l'id de la balise de la brique
     * @param {String} type  représente des la classe de la balise de la brique
     * @param {Position} topLeft la position de la brique dans la scene 
     * @param {Dimension} dimension la dimension de la brique 
     */
    constructor(id,type,topLeft, dimension) {
        super(id,type,topLeft,dimension);

    }


}
