const fruits = () =>{
    if (true){
        var fruits1 = 'apple';
        const fruits2 = 'banana';
        let fruits3 = 'kiwi';
        console.log(fruits2);
        console.log(fruits3);
    }
    console.log(fruits1);
}

fruits();


let x = 1;
{
    let x = 2;
    console.log(x);
}
console.log(x);

var y = 1;
{
    var y = 2;
    console.log(y);
}
console.log(y);


const anotherFunction = () =>{
    for (let i=0; i< 10; i++){
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
}

anotherFunction();