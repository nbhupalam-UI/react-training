import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';


class Welcome extends Component {
    componentDidMount() {
        let myheader = this.refs.heading;

        myheader.addEventListener('mouseover', ()=>{
            myheader.style.color = 'red';
        });

        myheader.addEventListener('mouseleave', ()=>{
            myheader.style.color = 'black';
        });
    }
    
    render() {
        return (
            <div>
                <h1 className="d-inlineblock" ref="heading">Welcome to React!!!</h1>
            </div>
        )
    }
}

render(<Welcome />, root);