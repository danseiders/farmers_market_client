import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router'

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
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
            console.log(res) 
        })
        .catch(err => {
            console.log(err)
        })
        .then(() => {
            // if(){

            // } else 
            this.setState({
                redirect: true,
            })
        })
    }
    
    render() {
        return (
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
        )
    }
}
