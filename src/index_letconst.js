//literals let , const

//string : "",'',``
//template Expression {} ,{{}} ,${}
let username = 'Subramanian';
console.log("User name " + username);
console.log("User name ", username);
console.log(`User name ${username}`);
//``
let domain = 'example.com'
let resource = '/api/customers'
//let url="http://www." + domain + resource+"/1";
let url = `http://www.${domain}${resource}`;
console.log(url);
//number : 64 bit - Number
let stockValue = 19.88734.toFixed(2);
console.log(`stockValue ${stockValue}`);
//boolean
let workingStatus = true;
console.log(`Working Status ${workingStatus}`);
//falsy values
// boolean false,""(empty string),0,undefined,NaN,null

let totalSalary;
console.log(`total Salary ${totalSalary}`);
//Not a Number: It is number which is error code
let grandSalary = totalSalary * 100;
console.log(`grandSalary Salary ${grandSalary}`);

let wages = "100";
//type conversion error: NaN
let totalWage = wages * 10;
let tWage = parseInt(wages, 10) * 2;
console.log(`total Wage ${totalWage}`);
console.log(`total Wage ${tWage}`);

if (totalWage) {
    console.log('Total Wage found')
} else {
    console.log('Error in wage');
}
let myresult = totalWage ? 'Total Wage found' : 'Error in wage';
console.log(myresult) ;

//Infinity
let avgSalary =9000 / 0;
console.log(`Avg Salary ${avgSalary}`);

//const and let  - both are same

let x =20;
console.log(x);
x=30;
console.log(x);
x="subramanian";
console.log(x);
const y=null;
console.log(y)