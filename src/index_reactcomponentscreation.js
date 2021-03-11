//Component creations
import React from 'react';
import ReactDOM from 'react-dom';

//1.variable pattern
/* const Hello = <h1>Hello React!</h1>;

ReactDOM.render(Hello,document.getElementById('root')); */
//2.Using Functions
//es 5 function
/* function Hello(){
    return (
        <h1>Hello React!</h1>
    )
} */
//ES 6 arrow
/* const Hello = ()=>(<h1>Hello React!</h1>);
 */

class Hello extends React.Component {
   render(){
       return(<h1>Hello React!</h1>);
   }
}




ReactDOM.render(<Hello/>,document.getElementById('root'));
