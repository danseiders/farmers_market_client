import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import jwt_decode from "jwt-decode"

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            loggedIn: false,
            redirect: null
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
            const token = res.data.token
            const decoded = jwt_decode(token)
            console.log(decoded.user.displayName)
            sessionStorage.setItem('userAuthToken', token)
            sessionStorage.setItem('displayName', decoded.user.displayName)      
            // sessionStorage.setItem('refreshToken', 'refreshToken')      
            // console.log(sessionStorage)
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
                sessionStorage.setItem('loggedIn', 'true')
            } else {
                console.log('user login failed')
            }
        })
    }
        logout = () => {
            console.log('logout!')
            console.log(sessionStorage)
            sessionStorage.removeItem('loggedIn')
            sessionStorage.removeItem('userAuthToken')
            sessionStorage.removeItem('displayName')
            this.setState({
                loggedIn: false
            })
            console.log(sessionStorage)
        }
    render() {
        // if (this.state.redirect === true) {
        //     return <Redirect to="/userFarm" />
        // }
        return (
            <div>
                { this.state.loggedIn ? 
                <div>
                    <h2>Welcome, {sessionStorage.displayName}</h2>
                    <button onClick={this.logout}>Logout</button> 
                </div>
                :
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
