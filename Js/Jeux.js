// Petit jeux qui tire un chiffre aléatoire entre 1 et 100
// Le prompt propose dde taper un chiffre
// Si chiffre trop grand afficher "Trop grand , recommencer"
// Si chiffre trop petit afficher "Trop petit , recommencer"
// Si chiffre trouvé, afficher "BRAVO"
// Boucle le jeux tant que l'utilisateur répond O

var RandomNumber, ProposeNumber, i, Answer, NbMax, Message;

// RandomNumber : nombre aléatoire généré avec Math.random
// ProposeNumber : Nombre proposé par l'utilisateur
// i : nombre de coup
// Answer : reponse O et N pour continuer le jeux
// NbMax : nombre max choisi par l'utilisateur

Answer="Y";
// Boucle le jeux tant que Answer est égal à O
while (Answer == "Y" || Answer =="y") {

    // L'utilisateur peut choisir le nombre maximum
    NbMax=parseInt(prompt("Quel est votre chiffre maximun? ", "0000"));
    // Génere le nombre aléatoire
    RandomNumber=Math.floor(Math.random() * NbMax) + 1;

    ProposeNumber=0;
    i=0;
    // Tant que ProposeNumber est différent de RandomNumber alors boucle
    while (RandomNumber != ProposeNumber)  {
       // prompt pour demander son chiffre
        ProposeNumber=parseInt(prompt("Quel chiffre entre 1 et "+NbMax,"0000"));
       // Test de la valeur proposé qui va conditionner l'affichage
       // Si nombre proposé inferieur à random
       if (RandomNumber > ProposeNumber) {
            console.log("Perdu,", ProposeNumber ,"est plus petit que le nombre recherché");
            // sinon si nombre proposé supérieur à random
        } else if (RandomNumber < ProposeNumber) {
            console.log("Perdu,", ProposeNumber ,"est plus grand que le nombre recherché");
            // sinon c'est gagné
        } else {
        console.log("Win, with", i ,"shot(s)");
         // Message personnalisé en fonction du nombre de coup
         if (i == 1) {
            console.log("You're the MASTER");    
        } else if (i <= 5){
            console.log("Nice job !!!");   
        } else if (i <= 10) {
            console.log("Try better next time !");   
        } else {
            console.log("GO TO SLEEP !!!!!!!!!");   
        }
        }
       
        // compteur de nombre de coup
       i++;
    }

// Voulez-vous recommencer une partie
Answer=prompt("Do you want playing again ? ", "Y/N")
while (Answer != 'Y' && Answer != 'y' && Answer !='N' && Answer !="n" ) {
    Answer=prompt("Do you want playing again ? ", "Y/N")   
}
    if (Answer == "N" || Answer =="n") {
        console.log("Bye Bye !!!");
        break;
    } else {
    console.log("Let's go, Good luck !!");
    }
}


