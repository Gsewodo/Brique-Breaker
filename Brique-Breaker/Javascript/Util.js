//fichier contenant les constante et des méthode utilitaire

const SCENE_SIZE = 960;
const SCENE_LARGEUR = 600;
const COLOR = ["rgb(51, 56, 121)", "red", "black", "green"];
const NBCOLUMN = 15;
const BRICKWIDTH = 64;
const BRICKHEIGHT = 24;
let bricksHit = [];
var nbLigne = 0;
var randomColumn = Math.floor(Math.random() * Math.floor(NBCOLUMN));
var sec = 0;


/**
 * permet d'afficher les minutes et seconde 
 * avec le bon format 
 * @param {*} val 
 */
function pad(val) {
    if (val > 9) {
        val = val;
    } else {
        val = "0"+val;
    }
    return val;
}
/**
 * lance un timer 
 */
function SetInt(){
setInterval(displayTime, 1000);
}

/**
 * affiche les minutes et seconde 
 */
function displayTime() {
    $("#seconds").html(pad(++sec % 60));
    $("#minutes").html(pad(parseInt(sec / 60, 10)));
}
