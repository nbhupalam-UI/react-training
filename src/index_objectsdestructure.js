//Arrow functions and objects

/* let printEmployee = () => {
   return {
       id:1,
       name:'Subramanian'
   }
}; */
let printEmployee = () => ({
    id: 1,
    name: 'Subramanian'
});
console.log(printEmployee());
//////////////////////////////////////////////////////////
//literal objects and parameter

let getCustomer = ({
    id,
    name
}) => {
    //es 5 style
    /* const id = customer.id;
    const name = customer.name;
 */
    /*  const {
         id,
         name
     } = customer; */
    //printing customer information
    console.log(`Id ${id}`);
    console.log(`Name ${name}`);
}
getCustomer({
    id: 1,
    name: 'Ram'
});

//////////////////////////////////////////////////////////

/* let processMessage = (name = 'Subramanian', message = 'hello', date = new Date()) => {

    /*  let name = 'Subramanian';
     let message = 'hello';
     let date = new Date(); */

/*   return {
      name: name,
      message: message,
      date: date
  }; */
//if left(key) and right(value)
/* return {
    name,
    message,
    date
}; */

//};

let processMessage = (name = 'Subramanian', message = 'hello', date = new Date()) => ({
    name,
    message,
    date
});
console.log(processMessage());