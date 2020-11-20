import React, { Component } from 'react'
import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Groceries from './Pages/Groceries'
import Header from './components/Header'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Markets from './Pages/Markets'
import Nav from './components/Nav'


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
          </Switch>
        </div>
        </Router>
      <Footer />
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

// export default class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div className="site-body">
//           <Header />
//           <About />
//           <p>index of farms here</p>
//           <Route path='/groceries' component={Groceries} />
//           <Footer />
//         </div>
//       </Router>
//     )
//   }
// }

