import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import RegisterPage from './views/register-page'
import KalifaHome from './views/kalifa-home'
import Home from './views/home'
import LHome from './views/-home'
import LoginPage from './views/login-page'
import ShaviHome from './views/shavi-home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={RegisterPage} exact path="/register-page" />
        <Route component={KalifaHome} exact path="/kalifa-home" />
        <Route component={Home} exact path="/" />
        <Route component={LHome} exact path="/-home" />
        <Route component={LoginPage} exact path="/login-page" />
        <Route component={ShaviHome} exact path="/shavi-home" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
