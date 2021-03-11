//object based concepts.
//Object: Memory - layout
//>//constructor pattern -using functions,using es 6 classes//
//literal pattern

//functions
//verb + noun or verb - stack frame -logic
//Noun
//object =  data + how the data can be manipulated(methods)
//instance data,methods -this

//Data Initalization:
/**
 * 1.hardcoded way
 * 2.after object creation
 * 3.during object creation -constructor overloading
 */
//Object relationship : HAS-A,IS-A
//is-a inheritance

function Address(city = 'defaultCity') {
    this.city = city;
}

function Employee(id = 1, name = 'Subramanian', address = new Address()) {
    this.id = id //1;
    this.name = name //'subramanian';
    //has-a
    this.address = address;
    this.calculateSalary = function () {
        return 1000;
    }
}
let emp = new Employee(23, 'ram', new Address('New York'));
//emp.name = 'Ram Kumar';
//how to access instance variables and methods
console.log(`Id ${emp.id}`);
console.log(`name ${emp.name}`);
console.log(`City ${emp.address.city}`);
console.log(`Salary ${emp.calculateSalary()}`);

class ShippingAddress {
    constructor(city = 'shippingcity') {
        this.city = city;
    }
}


class Message {
    static success = 'Success!';
}
class Person {
    foo = 'foo';
    constructor() {
        console.log('Person constructor')
    }
    doStuff() {
        return 'Person do stuff'
    }
}

class Customer extends Person {

    constructor(id = 1, name = 'Subramanian', shippingAddr = new ShippingAddress()) {
        super();
        this.id = id;
        this.name = name;
        this.shippingAddr = shippingAddr;
    }
    calculateGST() {
        return 1000 * 10 / 100;
    }
    //Redefining
    doStuff() {
        return 'Customer do stuff'
    }
}
let cust = new Customer();
cust.name = 'Ram Kumar'
//how to access instance variables and methods
console.log(`Id ${cust.id}`);
console.log('foo', cust.foo)
console.log('doStuff', cust.doStuff());
console.log(`name ${cust.name}`);
console.log('Success',Message.success);
console.log(`name ${cust.shippingAddr.city}`);

console.log(`GST ${cust.calculateGST()}`);

//literals
let order = {
    id: 1,
    value: 1000,
    city: 'chennai',
    //has-a
    product: {
        name: 'iphone '
    }

};
order.value = 999.88
console.log(`Id ${order.id}`);
console.log(`Value ${order.value}`);
console.log(`Value ${order.product.name}`);
console.log(`city ${order.city}`);
//////////////////////////////////////////////////////////////
//Object Augmentation: you can add,delete,update,iterate objects during runtime.
//Any objects can be augmented.

let lineItem={
    "id":1
};

//Add Property
lineItem.name = 'Dell';
//Update property: see if the the property exits update,else add
lineItem.name ='HP';
lineItem.price =90.8;
//delete
//delete lineItem.price*
console.log(lineItem);
for(let key in lineItem){
    console.log(key,lineItem[key]);
}