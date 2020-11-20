import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router'

export default class Signup extends Component {
    constructor(props){
        super(props)
        this.state = {
           displayName: '',
           email: '',
           password: '',
           redirect: false
        //    loggedIn: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        this.setState({ [event.target.id]: event.target.value })
    }
    handleSubmit(event){
        event.preventDefault()
        axios.post('https://farm-stan-api.herokuapp.com/users/new', {
            displayName: this.state.displayName,
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
            this.setState({
                redirect: true,
                // loggedIn: true
            })
        })
    }
    render() {
        if (this.state.redirect === true) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <h4>Create an account</h4>
            <form className='Signup' onSubmit={this.handleSubmit}>
                <label htmlFor='displayName'>Username: </label>
                <input 
                    type='text' 
                    name='displayName' 
                    id='displayName'    
                    onChange={this.handleChange}/><br />
                <label htmlFor='email'>Email: </label>
                <input 
                    type='text' 
                    name='email' 
                    id='email' 
                    onChange={this.handleChange}/><br />
                <label htmlFor="password">Password: </label>
                <input 
                    type='password' 
                    name='password'
                    id='password' 
                    onChange={this.handleChange}/><br />
                <input type="submit" value="Submit"/>
            </form>
            
        </div>
        )
    }
}
