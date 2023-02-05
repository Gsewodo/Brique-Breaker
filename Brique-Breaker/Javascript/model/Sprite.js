/**
 * la classe sprite représente chaque element dans la scene ball, brick, paddle 
 * classe parent de Brick, Ball et Paddle
 */
class Sprite {
  
    /**
     * constructeur de sprite
     * @param {String} id représente des l'id de la balise du sprite
     * @param {String} type  représente des la classe de la balise du sprite
     * @param {Position} topLeft la position du sprite dans la scene 
     * @param {Dimension} dimension la dimension du sprite 
     */
    constructor(id, type, topLeft, dimension) {

        this._id = id;
        this._type = type;
        this._topLeft = topLeft;
        this._dimension = dimension;
    }

    /**
   * getter de id
   */
    get id() {
        return this._id;
    }

    /**
     * getter de type
     */
    get type() {
        return this._type;
    }



    /**
     * getter de topLeft
     */
    get topLeft() {
        return this._topLeft;
    }

    /**
     * getter de dimension 
     */
    get dimension() {
        return this._dimension;
    }



    /**
        * permet d'empecher que le sprite ne déborde de la scene du coté droit ou gauche,
        * si le sprite est une Ball alors la balle change de couleur à chaque collision 
        * et  le mouvement de la balle est inversé
        * @param {x} topLeftX le x de l'attribut (Position) topleft 
        * @returns {x} topLeftX 0 si le sprite est en dehors de la scene du coté gauche , 
        * la taille de la scene - celle du sprite si le sprite est en dehors de la scene du coté droit et la valeur de topLeftX
        * dans les cas ou le sprite ne déborde pas 
        */
    noExceedingX(topLeftX) {

        if (topLeftX < 0) {
            if (this instanceof Ball) {
                this._movement.reverseX();
                this.TouchWalls();
            }
            return 0;
        }
        else if (topLeftX > SCENE_SIZE - this.dimension.width) {
            if (this instanceof Ball) {
                this._movement.reverseX();

                this.TouchWalls();
            }
            return SCENE_SIZE - this.dimension.width;

        } else {
            return topLeftX;


        }

    }


    /**
     * permet de savoir si un element de la scene touche la balle 
     * @param {Sprite} b un element (brick, padle)
     * @returns vrai si la balle touche b et faux sinon
     */
    collision(b) {

        let ballX = this._topLeft.x;
        let ballY = this._topLeft.y;

        let collision =
            !(((ballY + this._dimension.height) < (b.topLeft.y)) ||
                (ballY > (b.topLeft.y + b.dimension.height)) ||
                ((ballX + this._dimension.width) < b.topLeft.x) ||
                (ballX > (b.topLeft.x + b.dimension.width)));


        return collision;

    }







}