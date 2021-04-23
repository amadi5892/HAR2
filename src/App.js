import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home/Home';
import Buyers from './components/Buyers/Buyers';
import Sellers from './components/Sellers/Sellers';

import './App.css';
import './AppQueries.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav className="nav">
          <div className="logo">
            <h3>Logo</h3>
          </div>
          <div className="title">
            <h2>Home Affordable Realty Corp.</h2>
          </div>
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/buyers">Buyers</Link>
            </li>
            <li>
              <Link to="/sellers">Sellers</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/buyers">
            <Buyers />
          </Route>
          <Route path="/sellers">
            <Sellers />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}