import React, { Component } from 'react'

export default class Signup extends Component {
    render() {
        return (
            <div className='Signup'>
                <h4>Create an account</h4>
                <label htmlFor='displayName'>Username: </label>
                    <input type="text" name='displayName'/><br />
                <label htmlFor='email'>Email: </label>
                    <input type="text" name='email'/><br />
                <label htmlFor="password">Create A Password: </label>
                    <input type='password' name='password'></input><br />
                <input type="button" value="Submit"/>
            </div>
        )
    }
}
