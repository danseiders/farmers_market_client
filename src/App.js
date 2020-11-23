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
import NewFarm from './Pages/NewFarm'
import EditFarm from './Pages/EditFarm'
import { tsConstructorType, tsConstructSignatureDeclaration } from '@babel/types'

export default function App() {
  return (
    <div className='App'>
        <Router>
        <div className='React-router'>
          <Header />
          <Nav />
          <Switch>
            <Route path="/" exact component={About}></Route>
            <Route path="/groceries" component={Groceries}></Route>
            <Route path="/markets" component={Markets}></Route>
            <Route path="/farms" exact component={Farms}></Route>
            <Route path="/farms/edit" exact component={EditFarm}></Route>
            <Route path="/newfarm" component={NewFarm}></Route>
            <Route path="/signup" component={Signup}></Route>
          </Switch>
        </div>
        </Router>
        {/* <div className='Footer'>
          <Footer />
        </div> */}
      
    </div>
  )
}
