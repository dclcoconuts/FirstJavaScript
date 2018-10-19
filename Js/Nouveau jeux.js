// Petit jeux qui tire un chiffre aléatoire entre 1 et 100
// Le prompt propose dde taper un chiffre
// Si chiffre trop grand afficher "Trop grand , recommencer"
// Si chiffre trop petit afficher "Trop petit , recommencer"
// Si chiffre trouvé, afficher "BRAVO"
// Boucle le jeux tant que l'utilisateur répond O

var RandomNumber, ProposeNumber, i, Answer, NbMax, Message, NbStroke;

// RandomNumber : nombre aléatoire généré avec Math.random
// ProposeNumber : Nombre proposé par l'utilisateur
// i : nombre de coup
// Answer : reponse O et N pour continuer le jeux
// NbMax : nombre max choisi par l'utilisateur

Answer="Y";
// Boucle le jeux tant que Answer est égal à O
while (Answer == "Y" || Answer =="y") {

    // L'utilisateur peut choisir le nombre maximum
    NbMax=parseInt(prompt(" Max number? ", "0000"));

    // Verification que le nombre est valide
    value=Number.isFinite(NbMax);
    while (value == false || NbMax <= 0 ) {
        NbMax=parseInt(prompt("Invalid Number!!!  Max number? ", "0000")); 
        value=Number.isFinite(NbMax);
    }

    // Génere le nombre aléatoire
    RandomNumber=Math.floor(Math.random() * NbMax) + 1;

    // Demander en combien de coup l'utilisateur veut jouer
    NbStroke=parseInt(prompt("How many strokes? ", "00"));
    // Verification que le nombre est valide
     value=Number.isFinite(NbStroke);
        while (value == false || NbStroke <= 0 ) {
            NbStroke=parseInt(prompt("Invalid Number!!!  How many strokes? ", "00"));
            value=Number.isFinite(NbStroke);
        }

    ProposeNumber=0;
    i=0;
    // Tant que ProposeNumber est différent de RandomNumber alors boucle
    while (RandomNumber != ProposeNumber)  {
       // prompt pour demander son chiffre
        ProposeNumber=parseInt(prompt("What number between 1 and "+NbMax,"0000"));

           // Verification que le nombre est valide
        value=Number.isFinite(ProposeNumber);
        while (value == false || ProposeNumber <= 0 ) {
            ProposeNumber=parseInt(prompt(" Invalid Number!!! What number between 1 and "+NbMax,"0000"));
            value=Number.isFinite(ProposeNumber);
        }

       // Test de la valeur proposé qui va conditionner l'affichage
       // Si nombre proposé inferieur à random
       if (RandomNumber > ProposeNumber) {
            console.log("LOST,", ProposeNumber ,"is too small");
            // sinon si nombre proposé supérieur à random
        } else if (RandomNumber < ProposeNumber) {
            console.log("LOST,", ProposeNumber ,"is too big");
            // sinon c'est gagné
        } else {
            if (NbStroke == i)
            {
                console.log("Win, with", i ,"shot(s) as expected, WELL DONE !!");
            } else {
                if (i < NbStroke) {
                console.log("Win, with", i ,"shot(s), but bad pronostic, TRY AGAIN !!!!");
            } else {
                console.log("Win, with", i ,"shot(s), but too much strokes, WHAT A SHAME !!!!");
            }
            }
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
       NbStroke--;
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


