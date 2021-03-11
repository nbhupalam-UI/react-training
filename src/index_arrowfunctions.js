//function
function sayHello() {
    console.log('Hello');
}
sayHello();
//parameters and arg
//parameters can be any type
function getMyName(name = 'default') {
    console.log(`Name is ${name}`)
}
getMyName('Subramanian');
getMyName();
//return: can return any value(type)
function getValue() {
    return 'Subramanian';
}
console.log(getValue());
/////////////////////////////////////////////////////////////
//Function expression/ function as literal.

//syntax 1
function getSalary() {
    console.log('salary function');
}
//getSalary()
let salary = getSalary;
salary();

//syntax 2 : Anonmous function
let wage = function () {
    console.log('Wage function');
};
wage();
//////////////////////////////////////////////////////////////
//How to pass function as parameter :Async - callback functions.
//1.function must be passed as parameter to anthoer function.
//2.function logic must be delegated to web api/browser api - libuv.

function greetMe(cb) {
    setTimeout(function () {
        let fakeResponse = 'Subramanian';
        let result = cb(fakeResponse);
        console.log(result);
    }, 1000);
}

let welcome = function (name) {
    // console.log('Welcome', name);
    return `Welcome ${name}`;
};
console.log('before greet');
greetMe(welcome);
greetMe(function (name) {
    //console.log('Hello!', name);
    return `Hello ${name}`;
});
console.log('after greet');

function add(a, b) {
    let r = a + b;
    console.log(r);
}

let x = 10;
let y = 20;
add(x, y);
add(30, 90);
//Lamdas or arrow functions

/* let hai = function () {
    console.log('Welcome')
}; */
//basic syntax
/* let hai = () => {
    console.log('Hai')
};
hai(); */
//single line- single body
//let hai = () => console.log('Hai');
//hai();
//parameters and args - single parameter,without default value
/* let hai = name => console.log('Hai',name);
hai('subramanian'); */
//parameters and args - more parameter,without default value

/* let hai = (name,message) => console.log(message,name);
hai('subramanian','hello');
 */
//parameters and args - more/single parameter,with default value
/* let hai = (name='defaultName',message='hai') => console.log(message,name);
hai(); */
//function parameter

let cbProvider = cb => setTimeout(() => cb('foo'), 100)
let myProvider = foo => console.log('MyProvider', foo);
cbProvider(myProvider);
cbProvider(foo => console.log('My new Provider', foo));
//return statment.
/* let getScore = () => {
    return 90;
}; */
//no function body only return
let getScore = () => 90;
console.log(getScore());
//return + arg together
let getRank = rank => rank;
console.log(`Rank ${getRank(10)}`);
////////////////////////////////////////////////////////////
//Higher order functions -HOF : decorator design pattern
//let newFunction=core function + new Function function

//es 5
/* let cake = function (milk) {
    return function (cream) {
        return function (sugar) {
            return `${milk} ${cream} ${sugar}`;
        }
    }
}; */
let cake = milk => cream => sugar => `${milk} ${cream} ${sugar}`;
//calling
console.log(cake('milk')('cream')('sugar'));