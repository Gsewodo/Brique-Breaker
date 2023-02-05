
/**
 * la classe Dimension représente la taille de chaque element Sprite du jeu 
 */
class Dimension {

  /**
     * constructeur de Dimension
     * @param {Number} width
     * @param {Number} height
     */
    constructor(width, height) {
        this._width = width;
        this._height=height;

    }

    /**
     * getter de width
     */
    get width() {
        return this._width;
    }

    /**
     * getter de heigth 
     */
    get height() {
        return this._height;
    }

}