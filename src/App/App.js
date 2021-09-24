import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'

import { Routes } from '../utils/routes'
import { Login, Registration, Tasks, Users } from '../pages'
import { Navigation } from '../components'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path={Routes.HomeRoute}>
          <Navigation />
        </Route>

        <Route exact path={Routes.SignInRoute}>
          <Login />
        </Route>

        <Route exact path={Routes.SignUpRoute}>
          <Registration />
        </Route>

        <Route path={Routes.TasksRoute}>
          <Tasks />
        </Route>

        <Route path={Routes.UsersRoute}>
          <Users />
        </Route>
      </Router>
    )
  }
}

export default App;
