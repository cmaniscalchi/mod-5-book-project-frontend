import React, { Fragment } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import NavBar from '../components/NavBar'
import LoginSignupForm from '../components/LoginSignupForm'
import NotFound from '../components/NotFound'
import Bookshelf from './Bookshelf'
import BookSearch from './BookSearch'

const App = () => {

  const background = require('../assets/img/gplaypattern.png')

  return (
    <Fragment>
      <NavBar />
      <div style={{
        backgroundImage: `url(${background})`,
        minHeight: window.innerHeight,
        minWidth: window.innerWidth,
        height: "100%",
        width: "100%"
      }}>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/bookshelf" />} />
          <Route exact path="/login" component={LoginSignupForm} />
          <Route exact path="/bookshelf" component={Bookshelf} />
          <Route exact path="/search" component={BookSearch} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Fragment>
  )
}

export default withRouter(App)
