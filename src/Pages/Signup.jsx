import React, { Component } from 'react'
import axios from 'axios'

export default class Signup extends Component {
    constructor(props){
        super(props)
        this.state = {
           displayName: '',
           email: '',
           password: '',

        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        this.setState({ [event.target.id]: event.target.value })
    }
    handleSubmit(event){
        console.log(event)
        event.preventDefault()
        axios.post('http://localhost:3003/users/new', {
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
    }
    render() {
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
