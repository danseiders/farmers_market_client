import React, { Component } from 'react'
import Login from './Login'
import Title from './Title'
import Signup from '../Pages/Signup'

export default class Header extends Component {
    render() {
        return (
            <div className='Header'>
                <Title />
                <div className='User-box'>
                    <Login />
                    <p>New? <a href='../Pages/Signup'>Create An Account</a></p>
                </div>
            </div>
        )
    }
}
