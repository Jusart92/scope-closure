a = 2;
var a;

console.log(a); //2


//###############// El hoisting solo funciona en las
//declaraciones y no en las inicializaciones
console.log(a);
var a = 2;



//////////////

function nameOfDog(name){
    console.log(name);
}

nameOfDog('Elmo')

//////////////
nameOfDog('Elmo')

function nameOfDog(name){
    console.log(name);
}
