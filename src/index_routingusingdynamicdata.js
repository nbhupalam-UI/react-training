import React from "react";
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/mobile-store">MobileStore</Link>
                </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/mobile-store" component={MobileStore} />
        </div>
    </Router>
);

const Home = () => (
    <div>
        <h1>Welcome to MySite</h1>
    </div>
);

const About = () => (
    <div>
        <h1>About</h1>
    </div>
);;

/* const MobileStore = ({ match }) => (
  <div>
    <h2>Mobiles</h2>
    <ul>
      <li>
        <Link to={`${match.url}/m1`}>Mobile 1</Link>
      </li>
      <li>
        <Link to={`${match.url}/m2`}>Mobile 2</Link>
      </li>
      <li>
        <Link to={`${match.url}/m3`}>Mobile 3</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:mobileId`} component={MobileDisplay} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a Mobile Type.</h3>}
    />
  </div>
);
 */
class MobileStore extends React.Component {
    state = {
        mobiles: []
    }
    componentDidMount() {
        fetch('http://localhost:3001/api')
            .then(response => response.json())
            .then(json => {
                console.log(json.mobiles)
                this.setState(state => {
                    return {
                        mobiles: state.mobiles.concat(json.mobiles)
                    }
                })
            })
    }
    render() {
        const { match } = this.props;

        return (
            <div>
                <h2>Mobiles</h2>
                <ul>
                    {
                        this.state.mobiles.map((mobile, index) => {
                            console.log(mobile)
                            return (
                                <li key={index}>
                                    <Link to={`${match.url}/${mobile}`}>{mobile}</Link>
                                </li>
                            )
                        })
                    }
                </ul>

                <Route path={`${match.url}/:mobileId`} component={MobileDisplay} />
                <Route
                    exact
                    path={match.url}
                    render={() => <h3>Please select a Mobile Type.</h3>}
                />
            </div>
        )
    }
}
const MobileDisplay = ({ match }) => (
    <div>
        <h3>Selected {match.params.mobileId}</h3>
    </div>
);

render(<App />, root);