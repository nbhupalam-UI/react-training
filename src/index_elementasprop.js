import React from 'react';
import { render } from 'react-dom';
import logo from './logo.svg';
import './App.css';

/**
 * Tab Component
 * @param {*} props 
 */
const Tab = (props) => (
    <div>
        {/** Place holder content **/}
        {props.children}
    </div>
)

const App = () => (
    <Tab>
        {/** Here hi is passed as prop **/}
        <h1>Welcome To Tab</h1>
        <ImagePlaceholder />
    </Tab>
)

const ImagePlaceholder = () => (
    <div>
        <img src={logo} className="App-logo" alt="logo" />
    </div>
)
render(<App />, root);