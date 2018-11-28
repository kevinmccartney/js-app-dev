import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>React Router Restaurant</h1>
        <h4>Serving up URLs like Momma used to make!</h4>
        <img src="https://i0.wp.com/68.media.tumblr.com/159d31bca61108d5bd1a8dedf5c14dfe/tumblr_otlasg917I1ql7xb0o6_1280.gif?" />
      </div>
    );
  }
}

class About extends Component {
  render() {
    return (
      <div>
        <h1>About Us</h1>
        <p>We here at the Triple-R love fresh URLs, especially ones tied to awesome React Components.</p>
        <p>It's even better when you can switch between those URLs with ease and share them with friends and family</p>
      </div>
    )
  }
}

class Menu extends Component {
  render() {
    return (
      <div>
        <h1>Menu</h1>
        <p>Check out our amazing 24/7 menu:
          <ul>
            <li>Lazy Loading</li>
            <li>Dynamic Route Matching</li>
            <li>Location Transition Handling</li>
          </ul>
        </p>
      </div>
    );
  }
}

class NavBar extends Component {
  render() {
    return (
      <div
        className="nav"
      >
        <Link to="/">Home</Link>&nbsp;|&nbsp;
        <Link to="menu">Menu</Link>&nbsp;|&nbsp;
        <Link to="about">About</Link>&nbsp;|&nbsp;
      </div>
    );
  }
}

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
        <NavBar />
        <hr />
        <Route name="Home" path="/" component={Home} exact />
        <Route name="Menu" path="/menu" component={Menu} />
        <Route name="About" path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<Routes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
