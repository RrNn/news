import React, { Component } from 'react';

import './styles/index.scss';

import { MemoryRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';

import Nav from './components/Nav';

import { Provider } from 'react-redux';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store()}>
        <Router>
          <Nav />
          <div className="data-container">
            <Route
              path="/"
              exact
              render={() => <Home newsType="headlines" />}
            />
            <Route
              path="/business"
              exact
              render={() => <Home newsType="business" />}
            />
            <Route
              path="/sports"
              exact
              render={() => <Home newsType="sports" />}
            />
            <Route
              path="/apple"
              exact
              render={() => <Home newsType="apple" />}
            />
            <Route
              path="/samsung"
              exact
              render={() => <Home newsType="samsung" />}
            />
            <Route
              path="/entertainment"
              exact
              render={() => <Home newsType="entertainment" />}
            />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
