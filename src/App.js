import React, { Component } from 'react'
import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Groceries from './Pages/Groceries'
import Farms from './Pages/Farms'
import Header from './components/Header'
import {BrowserRouter as Router, Switch, Route, Link, withRouter, Redirect} from 'react-router-dom';
import Markets from './Pages/Markets'
import Nav from './components/Nav'
import Signup from './Pages/Signup'
import { tsConstructorType } from '@babel/types'


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
            <Route path="/" exact>
              <Home />
            </Route>
            <Route>
              <Signup />
            </Route>
            <Route path="/farms" exact >
              <Farm />
            </Route>
          </Switch>
        </div>
        </Router>
      <Footer />
    </div>
  )
}

function Home() {
  console.log('hittin home')
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

