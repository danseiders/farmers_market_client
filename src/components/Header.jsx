import React, { Component } from 'react'
import Login from './Login'
import Title from './Title'
import { Link } from 'react-router-dom'
export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            loggedIn: sessionStorage.loggedIn
        }
    }
    render() {
        return (
            <div className='Header'>
                <Title />
                <div className='User-box'>
                    <Login />
                   {this.state.loggedIn ? '' : <p >New? <Link to='/signup'>Create An Account</Link></p>
    }
                </div>
            </div>
        )
    }
}
