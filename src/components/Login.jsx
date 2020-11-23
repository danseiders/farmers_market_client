import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Login extends Component {
    render() {
        return (
            <div>

                { this.props.loggedIn ? 
                <div className='LoggedIn-box'>
                    <h2>Welcome, {sessionStorage.displayName}</h2>
                    <button className='newFarmBtn'>New Farm</button>
                    <Link to='/farms/:id'>
                        <button className='editFarmBtn'>Edit Farm</button>
                    </Link>
                    <button className='logoutBtn' onClick={this.props.logout}>Logout</button> 
                </div>
                :
                <form className="Login" onSubmit={this.props.handleSubmit}>
                    <h4>Log in</h4>
                    <label htmlFor='email'>Email: </label>
                        <input 
                            type="text" 
                            name='email'
                            id='email'
                            onChange={this.props.handleChange}/>
                            <br/>
                    <label htmlFor="password">Password: </label>
                        <input 
                            type='password' 
                            name='password' 
                            id='password'
                            onChange={this.props.handleChange}/>
                            <br/>
                    <button className='loginBtn' id='submit' value='submit'>Submit</button>
                </form> 
                }
            </div>
            
        )
    }
}
