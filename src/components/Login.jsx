import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div className="Login">
                <label htmlFor='name'>Username: </label>
                    <input type="text" name='name'/><br />
                <label htmlFor="password">Password: </label>
                    <input type='password' name='password'></input><br />
                <input type="button" value="Submit"/>
            </div>
        )
    }
}
