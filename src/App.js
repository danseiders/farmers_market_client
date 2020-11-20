import React, { Component } from 'react'
import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Groceries from './Pages/Groceries'
import Header from './components/Header'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Markets from './Pages/Markets'


export default function App() {
  return (
    <Router>
      <Header />
      <Link to="/">Home</Link><br/>
      <Link to="/groceries">Vegetables</Link><br/>
      <Link to="/markets" exact >Our Farmers Markets</Link>
      <Switch>
        <Route path="/groceries">
          <Vegies />
        </Route>
        <Route path="/markets" exact>
          <Stalls />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
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

