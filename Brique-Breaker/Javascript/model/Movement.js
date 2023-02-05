
/**
 * classe Movement 
 * gère les mouvement de la balle dans la scene 
 */
class Movement {
    /**
     * constructeur du movement
     * @param {Number} deltaX gère les mouvement horizontaux 
     * @param {Number} deltaY gère les mouvement verticaux 
     */
    constructor(deltaX, deltaY) {
        this._deltaX = deltaX;
        this._deltaY = deltaY;
    }


    /**
     * getter de deltaX
     */
    get deltaX() {
        return this._deltaX;
    }

    /**
     * getter de deltaY
     */
    get deltaY() {
        return this._deltaY;
    }


    /**
     * setter de deltaX
     */
    set deltaX(valeur) {
        this._deltaX = valeur;
    }

    /**
     * setter de deltaY
     */
    set deltaY(valeur) {
        this._deltaY = valeur;
    }

    /**
      * inverse horizontalementle mouvement de la balle
      *
      */
    reverseX() {
        this._deltaX = -this._deltaX;

    }
    /**
    * inverse verticalement le mouvement de la balle
    *
    */
    reverseY() {
        this._deltaY = -this._deltaY;

    }


  /**
   * donne un nombre aléatoire entre un minimum et un maximum 
   * @param {Number} min 
   * @param {Number} max 
   * @returns un chiffre, nombre
   */
   getRandomArbitrary(min, max) {
   this._deltaY=  Math.random() * (max - min) + min;
  }

}