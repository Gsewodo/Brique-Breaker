/**
 * la classe player représente le joueur avec ses vies et son score 
 */
class Player {

    /**
     * constructeur de Player le score initiale est a 0 et le nombre de vie a 5
     */
    constructor() {
        this._score = 0;
        this._nbLifes =5;

    }


    /**
     * getter de score
     */
    get score() {
        return this._score;
    }

    /**
     * getter de nbLifes
     */
    get nbLifes() {
        return this._nbLifes;
    }

    /**
     * permet d'ajouter des points au score
     * @param {Number} points 
     */
    addToScore(points) {
        this._score = this._score + points;


    }

    /**
     * permet d'enlever une vie
     */
    lostLife() {
    
        this._nbLifes = this._nbLifes-1;
        


    }
/**
 * verifie si le joueur est toujours en vie 
 */
    stillAlive() {
        
        let stillAlive = this._nbLifes >1;
        return stillAlive;

    }


}