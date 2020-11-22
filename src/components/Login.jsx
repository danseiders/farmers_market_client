import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                { this.props.loggedIn ? 
                <div>
                    <h2>Welcome, {sessionStorage.displayName}</h2>
                    <button onClick={this.props.logout}>Logout</button> 
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
                    <input type="submit" value="Log In"/>
                </form> 
                }
            </div>
            
        )
    }
}
