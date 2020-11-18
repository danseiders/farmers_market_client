import React, { Component } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <p>index of farms here</p>
        <Footer />
      </div>
    )
  }
}

