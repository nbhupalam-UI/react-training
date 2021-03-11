import React from 'react';
import {
    render
} from 'react-dom';
import {
    BrowserRouter as Router, Route, Link
} from 'react-router-dom';

const Home = () => (
    <div>
        <h1>Welcome to MySite</h1>
    </div>
);
const About = () => (
    <div>
        <h1>About</h1>
    </div>
);

const MobileStore = ({ match }) => (
    <div>
        <h1>MobileStore</h1>
        <ul>
            <li>
                <Link to={`${match.url}/mobile1`}>Mobile1</Link>
            </li>
            <li>
                <Link to={`${match.url}/mobile2`}>Mobile2</Link>
            </li>
            <li>
                <Link to={`${match.url}/mobile3`}>Mobile3</Link>
            </li>
        </ul>
        <Route path={`${match.url}/:mobileId`} component={MobileDisplay} />
        <Route
            exact
            path={match.url}
            render={() => <h3>Please select a MobileType.</h3>}
        />
    </div>
);

const MobileDisplay = ({ match }) => (
    <div>
        <h3>Selected {match.params.mobileId}</h3>
    </div>
);


const App = () => {
    return (
        <div>
            <Router>
                <div className="container">
                    <h1>MyStore</h1>
                    <nav className="nav nav-bar">
                        <Link to="/about">About</Link> |
                      <Link to="/mobile-store">Mobiles
                    </Link>
                    </nav>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route path="/mobile-store" component={MobileStore} />
                </div>
            </Router>
        </div>
    )
}
render(<App />, root);