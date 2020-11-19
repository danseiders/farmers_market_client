import React, { Component } from 'react'
import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Groceries from './components/Groceries'
import Header from './components/Header'


export default class App extends Component {
  render() {
    return (
      <div className="site-body">
        <Header />
        <About />
        <p>index of farms here</p>
        <Groceries />
        <Footer />
      </div>
    )
  }
}

