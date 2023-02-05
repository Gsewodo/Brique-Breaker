explication de la démarche de travail du 2.7Bis:

-création d'une constante COLOR(tableaux de string) qui contient les 
valeur des couleurs
(des strings)

-création d'une variable numColor qui contient le numéro de la couleur 
choisie cad l'indice de la couleur(un string) du tableau de la constante 
COLOR 
 
-changement dans la classe view: je change le background color de ma 
balle en donnant la couleur qui se trouve a l'emplacement numColor dans 
la constante COLOR 

-création d'une méthode (dans la classe Ball) qui va modifier la couleur 
de la balle. changeColor() incrémente de 1 la variable numColor, si 
celle ci est plus grande que la taille tableau COLOR -1 (cad le plus 
grand indice possible) alors numColor est remis à 0

- appel de la méthode changeColor juste après que la balle ai touché le 
paddle, ou les bords de la scene 

--------------------------------------------------------------------------
Après correction : 

-création d'une constante COLOR(tableaux de string) qui contient les 
valeur des couleurs
(des strings)

-création d'une classe Color qui a pour attribut le tableaux constante COLOR
-ajout de la classe Color comme attribut de la classe Ball
 -création d'une méthode qui change la couleur dans la classe View
-appele de cette méthode quand la balle est en colision avec un élément 
