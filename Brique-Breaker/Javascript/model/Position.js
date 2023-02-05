/**
 * classe de la position 
 * determine la position de la balle dans la scene 
 */

class Position {


    /**
     * constructeur de la position
     * @param {Number} x position horizontale, la distance de la balle par rapport au bord
     * gauche de la scène. 
     * @param {Number} y position verticale, la distance de la balle par rapport au bord
     *   du haut de la scène. 
     */
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }


    /**
     * getter de x
     */
    get x() {
        return this._x;
    }

    /**
     * getter de y
     */
    get y() {
        return this._y;
    }

    /**
     * setter de x
     */
    set x(valeur) {
        this._x = valeur;
    }

    /**
     * setter de y
     */
    set y(valeur) {
        this._y = valeur;
    }

    /**
    * donne un chiffre,nombres aléatoire entre 0 et la taille de la scene 
    * @returns un chiffre/nombre
    */
    getRandomInt() {
        this._x = Math.floor(Math.random() * Math.floor(SCENE_SIZE));
    }

 
}