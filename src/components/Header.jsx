import React, { Component } from 'react'
import Login from './Login'
import Title from './Title'
import Signup from './Signup'

export default class Header extends Component {
    render() {
        return (
            <div className='Header'>
                <Title />
                <div className='User-box'>
                    <Login />
                    <p>New? Create An Account [link to Signup]</p>
                </div>
            </div>
        )
    }
}
