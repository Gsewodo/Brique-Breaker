/**
* Controller for the paddle movement.
* It make it follow the mouse.
*/
class PaddleCtrl {


    /**
    * Display the paddle and start controlling it with the mouse.
    * @param {Game} game: the game 
    * @param {View} view : the view
    */
    constructor(game, view) {
        this._view = view;
        this._game = game;
      
        $(document).mousemove((evt) => this.moveMouse(this._game.paddle, this._view, evt));

    }



    /**
    * Called when the mouse is moved.
    * It moves the paddle (horizontally) where the mouse is.
    * @param {Paddle} paddle : the paddle
    * @param {View} view : the view
    * @param {MouseEvent} evt : the mouse event
    */
    moveMouse(paddle, view, evt) {


        let mouseScene = evt.clientX - view.sceneLeft() - paddle.dimension.width / 2;
        this._game.paddleMove(mouseScene);
        view.update(paddle);



    }



}