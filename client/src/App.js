import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AboutMe from './components/AboutMe'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={AboutMe} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
