/** 
* Contrôleur de la balle.
* Propose des méthodes pour démarrer/arrêter la balle et la faire bouger.
*/
class BallCtrl {

    /**
     * constructeur de game
     * @param {*} game 
     * @param {*} view 
     */
    constructor(game, view) {
        this._game = game;
        this._view = view;

    }

    /**Démarre la balle. */
    start() {
        this._moveListener = setInterval(() => this.move(), 10);
       
            
    }

    /** Déplace la balle d’un pas (défini par son mouvement) et rafraichit la vue.
     * vérifie l'etat du jeu game over , gagné ? le nombre de vies, le score
     * 
     */
    move() {
        this._game.ballMove();
        this._view.update(this._game.ball);
        this._view.deleteBrickArray(bricksHit);
        this._view.updateScore(this._game.player.score);
      

        if (this._game.touchBottom()) {
            this._game.ball.movement.reverseY();
            if (this._game.player.stillAlive()) {

                this._game.player.lostLife();

            }
            else {
                this._game.player.lostLife();

                this._view.displayGameOver();
            
                this.stop();
                this._view.displayLapsTime();
            }

            this._view.updateLife(this._game.player.nbLifes);

        }

        if (this._game.noMoreBricks()) {
            this._view.displayWin();
            this.stop();
            this._view.displayLapsTime();
        }
        
    }





    /**  Arrête la balle. */
    stop() {
        clearInterval(this._moveListener);
    }

}

