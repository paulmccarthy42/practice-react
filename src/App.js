import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header'
import Shop from './components/Shop/Shop'
import Orders from './components/Orders/Orders'
import Review from './components/Review/Review'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div>
            <Route exact path="/" component={Shop}/>
            <Route exact path="/shop" component={Shop}/>
            <Route exact path="/review" component={Review}/>
            <Route exact path="/orders" component={Orders} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
