import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

const Home = () => {
    return (
        <div>
            <h1>Welcome to home page!!!!!</h1>
        </div>
    )
}

const About = () => {
    return (
        <div>
            <h1>Welcome to about page!!!!!</h1>
        </div>
    )
}

const Contact = () => {
    return (
        <div>
            <h1>Welcome to contact page!!!!!</h1>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <nav className="navbar navbar-expand-sm bg-light">

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact Us</a>
                            </li>
                        </ul>

                    </nav>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                </div>
            </BrowserRouter>
        </div>
    )
}

render(<App />, root);