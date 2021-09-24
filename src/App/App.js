import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'

import { Routes } from '../utils/routes'
import { AuthorizeRoute, NotAuthorizeRoute } from '../components/routes' 
import { Navigation } from '../components'
import { Login, Registration, Tasks, Users } from '../pages'


class App extends React.Component {
  render() {
    return (
      <Router>
        {/* <NotAuthorizeRoute path={Routes.SignInRoute} component={Login} /> */}
        <Route exact path={Routes.SignInRoute}>
          <Login />
        </Route>

        {/* <NotAuthorizeRoute path={Routes.SignUpRoute} component={Registration} /> */}
        <Route exact path={Routes.SignUpRoute}>
          <Registration />
        </Route>

        {/* <AuthorizeRoute path={Routes.TasksRoute} component={Tasks} /> */}
        <Route exact path={Routes.TasksRoute}>
          <Navigation />
          <Tasks />
        </Route>

        {/* <AuthorizeRoute path={Routes.UsersRoute} component={Users} /> */}
        <Route exact path={Routes.UsersRoute}>
          <Navigation />
          <Users />
        </Route>
      </Router>
    )
  }
}

export default App;
