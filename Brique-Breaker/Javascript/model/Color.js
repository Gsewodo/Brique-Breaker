/**
 * la classe color représente une couleur
 */
class Color {

    constructor() { 
        this._color =COLOR;
    }
    get taille() { 
        return this._color.length }
   
    donneCouleur(i){
        return this._color[i];
    }
    
}