var hello = 'HELLO';
var hello = 'varible reaignada';
let world = 'Hello World'
// let world = 'varible cambiada'
const helloWorld = 'Hello World!'
console.log(hello);

const anotherFunction = () =>{
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}


anotherFunction()


const helloWorld = () => {
    globalVar = 'Im global'
}

helloWorld()
console.log(globalVar);


const anotherFunction = () => {
    var localVar = globalVar = 'Im Global';
}

anotherFunction()

console.log(globalVar);