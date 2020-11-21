import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            loggedIn: false
        }
    }
    handleChange = (event) => {
        this.setState({[event.target.id]: event.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('https://farm-stan-api.herokuapp.com/users/login', {
            email: this.state.email,
            password: this.state.password
        })
        .then(res =>  {
            sessionStorage.setItem('userAuthToken', res.data.token)
            sessionStorage.setItem('displayName', res.data.displayName)
        })
        .catch(err => {
            console.log(err)
        })
        .then(() => {
            if(sessionStorage.userAuthToken.length > 0 ){
                this.setState({
                    loggedIn: true,
                    redirect: true,
                })
            } else {
                console.log('user login failed')
            }
        })
    }
    
    render() {
        return (
            <div>
                { this.state.loggedIn ? <h2>Welcome, {sessionStorage.displayName}</h2> :
                <form className="Login" onSubmit={this.handleSubmit}>
                    <h4>Log in</h4>
                    <label htmlFor='email'>Email: </label>
                        <input 
                            type="text" 
                            name='email'
                            id='email'
                            onChange={this.handleChange}/>
                            <br/>
                    <label htmlFor="password">Password: </label>
                        <input 
                            type='password' 
                            name='password' 
                            id='password'
                            onChange={this.handleChange}/>
                            <br/>
                    <input type="submit" value="Log In"/>
                </form> 
                }
            </div>
            
        )
    }
}
