class GameCtrl {

    /**
     * constructeur de Gamectrl
     * @param {*} game 
     * @param {*} view 
     */
    constructor(game, view) {
        this._game = game;
        this._view = view;
        this._ballCtrl = new BallCtrl(this._game, this._view);
        this._paddleCtrl = new PaddleCtrl(this._game, this._view);

    }

/**
 * appele la view pour afficher le paddle,les briques,le score, la balle, les vies et le niveau
 */
    display(){


        this._view.add(this._game.paddle);
        this._view.add(this._game.ball);

        this._view.addAll(this._game.wall);

        this._view.displayScore();
        this._view.displayLife();
        this._view.updateLife(this._game.player.nbLifes);
        
        this._view.displayLevel(this._game.level);
       
    }

    /**
     * démare la balle
     */
    play() {
       
       this.ballStartWait();
      
    
        
    }

    /**
     * arrete la balle
     */
    stop() {
        this._ballCtrl.stop();


    }

    /**
     * permet d'afficher le message de départ 
     */
    ballStartWait() {
    this._view.showStart("Click to start");
    $(document).mouseup(() => this.ballStart());

    }

    /**
     * cache le message de départ et lance le jeu 
     */
    ballStart() {
        $(document).off("mouseup");
        this._view.hideStart();
        this._ballCtrl.start();
        SetInt();
        
    }

}