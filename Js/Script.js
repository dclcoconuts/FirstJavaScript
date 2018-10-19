var a, b, c;
a=30;
b=4;
c=a+b;
console.log("Résultat addition =",c);
c=a-b;
console.log("Résultat soustraction =",c);
c=a*b;
console.log("Résultat multiplication =",c);
c=a/b;
console.log("Résultat division =",c);
c=a%b;
console.log("Résultat modulo =",c);

// Premiere fonction
var a, b;
a=10;
b=25;

function add() {
    var d=66;
    console.log("Résultat function add() = ",a+b);
}

add();

// pour avoir les differents types
console.log(typeof(12));
console.log(typeof(12));
console.log(typeof(12.5));
console.log(typeof("12"));
console.log(typeof['12','12.5']);
console.log(typeof(true));
console.log(typeof(add()));

// pour transformer un string en number
a=parseInt(prompt("a ?", "00"));
b=parseInt(prompt("b ?", "00"));
console.log(a," ",typeof(a));

// pour effacer la console
// console.clear();


