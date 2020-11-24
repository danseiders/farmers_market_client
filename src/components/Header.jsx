import React, { Component } from 'react'
import Login from './Login'
import Title from './Title'
import { Link } from 'react-router-dom'
import axios from 'axios'
import jwt_decode from "jwt-decode"
export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
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
            const token = res.data.token //declares token var of the token in API response
            const decoded = jwt_decode(token) //decodes token to access payload
            sessionStorage.setItem('userAuthToken', token) //updates sessionStorage with token
            sessionStorage.setItem('displayName', decoded.user.displayName) //updates sessionStorage with displayName
            sessionStorage.setItem('userId', decoded.user.id)
        })
        .catch(err => {
            console.log(err)
        })
        .then(() => {
            if(sessionStorage.userAuthToken.length > 0 ){
                this.setState({
                    redirect: true,
                    loggedIn: true
                })
                sessionStorage.setItem('loggedIn', 'true') // sets sessionStorage to loggedin if token has been received and stored. 
                console.log(sessionStorage)
            } else {
                console.log('user login failed')
            }
        })
    }
    logout = () => { //this function removes the sessionData stored with logging in. 
        sessionStorage.removeItem('loggedIn')
        sessionStorage.removeItem('userAuthToken')
        sessionStorage.removeItem('displayName')
        this.setState({
            loggedIn: false
        })
        console.log(sessionStorage)
    }
    render() {
        return (
            <div className='Header'>
                <Title />
                <div className='User-box'>
                    <Login 
                        loggedIn={ this.state.loggedIn } 
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        logout={this.logout}
                    />
                   {this.state.loggedIn ? '' : <p >New? <Link to='/signup'>Create An Account</Link></p>
    }
                </div>
            </div>
        )
    }
}
