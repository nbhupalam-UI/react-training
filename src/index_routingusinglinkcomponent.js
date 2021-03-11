import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
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
                    <nav className="navbar navbar-expand-sm bg-dark">
                        <ul className="navbar-nav">
                            <li className="nav-item mr-2">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav-item mr-2">
                                <Link to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact">Contact</Link>
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