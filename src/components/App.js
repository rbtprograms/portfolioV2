import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Work from './Work';
import Snakes from './Snakes';


class App extends Component {
  render() { 
    return (
      <Router>
        <div>
          <h1>robert thompson</h1>
          <Header/>
          <Switch>
            <Route exact path="/about" component={About}/>
            <Route exact path="/work" component={Work}/>
            <Route exact path="/snakesnsquirrels" component={Snakes}/>
          </Switch>
        </div>
      </Router>
    );
  }
}
 
export default App;