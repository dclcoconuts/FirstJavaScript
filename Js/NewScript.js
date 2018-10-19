console.clear();

var age, BirthYear, Year, date, WhatYear, ageExpect;

// Calcul année en cours
date=new Date();
year=date.getFullYear();

//Prompt pour demander l'age
age=parseInt(prompt("Quel âge avez-vous ? ", "00"));
//Prompt pour demander l'année
WhatYear=parseInt(prompt("Quelle année voulez-vous connaitre ? ", "0000"));

// Calcul année de naissance
function CalculYearBirth() {
    BirthYear=year-age;
}

// Calcul age attendu
function CalculYearAsk() {
    ageExpect=WhatYear-BirthYear;
}

CalculYearBirth();
CalculYearAsk();

// affichage du résultat
console.log("Vous êtes nés en",BirthYear);
// conditionnel pour changer affichage en fonction de l'année demandée
if (WhatYear < year) {
    console.log("En",WhatYear,"vous aviez",ageExpect,"an(s)");
} else {
    console.log("En",WhatYear,"vous aurez",ageExpect,"an(s)");
}  

// affichage personne majeur ou  mineur
if (age < 18 ) {
    console.log("Et vous êtes mineur en plus");
} else if (age > 65) {
    console.log("Et en plus vous avez plus de 60 ans");
} else {
    console.log("Et vous êtes majeur en plus !!!!");
}

