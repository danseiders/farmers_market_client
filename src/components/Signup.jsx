import React, { Component } from 'react'

export default class Signup extends Component {
    render() {
        return (
            <div className='Signup'>
                <h4>Create an account</h4>
                <label htmlFor='name'>Username: </label>
                    <input type="text" name='name'/><br />
                <label htmlFor="password">Password: </label>
                    <input type='password' name='password'></input><br />
                <input type="button" value="Submit"/>
            </div>
        )
    }
}
