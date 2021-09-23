import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Login from '../pages/Login/Login';
import Registration from '../pages/Registration/Registration';
import Tasks from '../pages/Tasks/Tasks';
import Navigation from '../components/navigation/Navigation';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path='/'>
          <Navigation />
        </Route>

        <Route exact path='/login'>
          <Login />
        </Route>

        <Route exact path='/registration'>
          <Registration />
        </Route>

        <Route path='/tasks'>
          <Tasks />
        </Route>
      </Router>
    )
  }
}

export default App;
