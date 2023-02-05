
/**
*classe Game
*gère le lancement du jeu 
*/
class Game {
    /**
     * constructeur de Game
     * 
     */
    constructor() {
        this._paddle = new Paddle("paddle", "paddle", new Position(300, 586), new Dimension(96, 16));
        let positionBall = new Position(400, 500);
        let mouvementBall = new Movement(2, -1);
        let randomMove = mouvementBall.getRandomArbitrary(-10, -2);
        let randomPosition = positionBall.getRandomInt(SCENE_SIZE);
        this._ball = new Ball("ball", "ball", positionBall, mouvementBall, 0, new Dimension(24, 24));
        this._wall = this.createWall();
        this._player = new Player();
        this._level = 1;

    }

    /**
     * getter du paddle
     */
    get paddle() {
        return this._paddle;
    }

    /**
     * getter de la ball
     */
    get ball() {
        return this._ball;
    }

    /**
     * getter de wall
     */
    get wall() {
        return this._wall;
    }


    /**
     * getter du player
     */
    get player() {
        return this._player;
    }

    /**
    * getter du level
    */
    get level() {
        return this._level;
    }

    /**
     * setter du level
     */
    set level(val) {
        this._level = val;
    }

    /**
     * permet de bouger le paddle 
     * @param {*} centerX 
     */
    paddleMove(centerX) {
        this._paddle.moveTo(centerX);

    }

    /**
     * gère le déplacement de la balle 
     */
    ballMove() {
        this._ball.move();
        this.ballTouch(this._ball._topLeft);
        this.collisionBricks(this._wall);
        this.bonusBrickTouch(bricksHit);
     
     
    }

    /**
     * permet de savoir si la balle a touché le bas de la scene 
     * @returns gameOver vrai si la balle touche le bas de la scene
     */
    touchBottom() {
        let gameOver = this._ball.topLeft.y > SCENE_LARGEUR - this._ball.dimension.height;

        return gameOver;
    }

    /**
     * permet de savoir si il n'y a plus de briques dans la scene 
     * @returns win vrai si il n'y a plus de brique et faux sinon
     */
    noMoreBricks() {
        let win = (this._wall.length == 0);
        return win;

    }



    /**
     * permet d'inbverser le mouvement de la balle si celle si touche le paddle ,change la couleur de la balle à chaque collision 
     * de la balle et inverse le mouvement de la balle 
     * @param {y} topLeft position de la balle
     */
    ballTouch(topLeft) {

        if (this._ball.collision(this.paddle)) {

            this._ball.movement.reverseY();

            this._ball.TouchWalls();
        }
    }







    /**
     * permet de créer le mur de brique 
     */
    createWall() {
        let bricks = [];
        let left = 0;
        let top = 40;
        this.recupNbLigne();
        for (let i = 0; i < nbLigne; i++) {
            if (i> 0) {
                top = top + BRICKHEIGHT;
            }
            for (let j = 0; j < NBCOLUMN; j++) {
                if (j > 0) {
                    left = left + BRICKWIDTH;
                }
                bricks.push(new Brick(i + "-" + j, "brick", new Position(left, top), new Dimension(BRICKWIDTH, BRICKHEIGHT)));
            }
            left = 0;
        }

        return bricks;

    }

    /**
     * gère les colisions entre la balle et le mur de brique
     * @param {*} wall un mur de brique
     */
    collisionBricks() {
        for (let i = 0; i < this._wall.length; i++) {
            let b = this._wall[i];
            if (this._ball.collision(b)) {
                this._player.addToScore(10);
                bricksHit.push(new Brick(b.id, b.type, b.topLeft, b.Dimension));
                this._wall.splice(i, 1);
                this._ball.movement.reverseY();
                this._ball.TouchWalls();

            }
        }
    }

    /**
     * permet de recupèrer le nombre de rangée de brique à afficher 
     */
    recupNbLigne() {
        let ligne = new URL(location.href).searchParams.get("ligne");
        nbLigne = Number(ligne);

    }


    /**
     * change la couleur des bricks si la brick bonus a été touché la brique bonus 
     * se trouve dans la premirer rangé et a une position aléatoire 
     * @param {Brick[]} bricksHit le tableau contenant les brique touché 
     */
    bonusBrickTouch(bricksHit) {
        if (bricksHit.length > 0 && bricksHit[bricksHit.length - 1].id == "0-" + randomColumn) {
            view.bonusDisplay();

        }
    }

  


}



