console.log("This is JavaScript Function Tutorial");
// DRY --> Do Not Repeat Yourself 

// Declaration of Function 
function donkey(name, greetText = "Message from JavaScript ! ") {
    let name1 = "Name1";
    console.log(greetText + name);
    console.log(name + " is a good boy");
};
function sum(a, b, c) {
    let d = a + b + c;
    return d;
    // console.log("Function is returned"); //Unreachable code ; This line will never execute
}

let returnval = sum(1, 2, 3);
console.log(returnval);

let name = "Pratham";
let name1 = "Adarsh";
let name2 = "Kunal";
let name3 = "Aditya";
let greetText1 = "Good Morning ! ";
donkey(name, greetText1);
donkey(name1, greetText1);
donkey(name2, greetText1);
donkey(name3);

function greaterThan(a, b) {
    if (a > b) {
        console.log(a + " is greater than " + b);
    }
    else {
        console.log(b + " is greater than " + a);
    }
}
greaterThan(100, 40);
// let returnval=donkey(name3);
// console.log(returnval);

// console.log(name+" is a good boy");
// console.log(name1+" is a good boy");
// console.log(name2+" is a good boy");
// console.log(name3+" is a good boy");