import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Footer from './components/Footer'

import './App.css'


export default () => {
  return (
    <>
      {/* <Header /> */}
      <Router>
        <Switch>
          {/* <Route path="/projects">
            <Projects />
          </Route> */}
          {/* <Route path="/events">
            <Events />
          </Route> */}
          {/* <Route path="/about">
            <About />
          </Route> */}
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </Router>
      <Footer />
    </>
  )
}
