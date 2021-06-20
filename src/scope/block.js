const fruits = () =>{
    if (true){
        var fruit1 = 'aple';
        let fruit2 = 'banana';
        const fruit3 = 'kiwi';
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
    // console.log(fruit2);
    // console.log(fruit3);
}

fruits();


let x = 1;
{
  let x =2;
  console.log(x);
}
console.log(x);

var x = 1;
{
  var x =2;
  console.log(x);
}
console.log(x);

const anotherFunction = () =>{
  for (var i = 1; i<10; i++){
    setTimeout(() => {
      console.log(i);
    }, 1000)
  }
}

anotherFunction();

const anotherFunction = () =>{
  for (let i = 1; i<10; i++){
    setTimeout(() => {
      console.log(i);
    }, 1000)
  }
}

anotherFunction();