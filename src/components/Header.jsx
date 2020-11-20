import React, { Component } from 'react'
import Login from './Login'
import Title from './Title'
import Signup from '../Pages/Signup'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className='Header'>
                <Title />
                <div className='User-box'>
                    <Login />
                    <p>New? <Link to='/signup'>Create An Account</Link></p>
                </div>
            </div>
        )
    }
}
