import React, { Component } from 'react'
import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Groceries from './Pages/Groceries'
import Farms from './Pages/Farms'
import Header from './components/Header'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Markets from './Pages/Markets'
import Nav from './components/Nav'
import Farms from './Pages/Farms'


export default function App() {
  return (
    <div className='App'>
        <Router>
        <div className='React-router'>
          <Header />
          <Nav />
          <Switch>
            <Route path="/groceries" component={Groceries}>
              <Vegies />
            </Route>
            <Route path="/markets" exact component={Markets}>
              <Stalls />
            </Route>
            <Route path="/farms" exact component={Farms}>
              <Farm />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/farms" exact >
              <Farm />
            </Route>
          </Switch>
        </div>
        </Router>
        {/* <div className='Footer'>
          <Footer />
        </div> */}
      
    </div>
  )
}

function Home() {
  return <About />
}

function Vegies() {
  return <Groceries />
}

function Stalls() {
  return <Markets />
}
function Farm() {
  return <Farms />
}

function Farm() {
  return <Farms />
}

