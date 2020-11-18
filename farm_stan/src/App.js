import React, { Component } from 'react'
import About from './components/About'
import Footer from './components/Footer'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1><b>FARM STAN</b></h1>
        <About />
        <Footer />
      </div>
    )
  }
}

