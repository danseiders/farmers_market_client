import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router'

export default class Signup extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            displayName: '',
            address: '',
            phoneNumber: '',
            items: '',
            market: '',
            redirect: false,
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
            email: this.state.email,
            password: this.state.password,
            displayName: this.state.displayName,
            address: this.state.address,
            phoneNumber: this.state.phoneNumber,
            items: this.state.items,
            market: this.state.market

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
            <div className='Signup'>
                <h3>Create an account</h3>
            <form className='Signup-form' onSubmit={this.handleSubmit}>
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
                    onChange={this.handleChange}/><br /><br />
                <label htmlFor='displayName'>Farm name: </label>
                <input 
                    type='text' 
                    name='displayName' 
                    id='displayName'    
                    onChange={this.handleChange}/><br />
                <label htmlFor='address'>Address: </label>
                <input 
                    type='text' 
                    name='address' 
                    id='address'    
                    onChange={this.handleChange}/><br />
                <label htmlFor='phoneNumber'>Phone: </label>
                <input 
                    type='text' 
                    name='phoneNumber' 
                    id='phoneNumber'    
                    onChange={this.handleChange}/><br />
                <label htmlFor='items'>Items: </label>
                <input 
                    type='text' 
                    name='items' 
                    id='items'    
                    onChange={this.handleChange}/><br />
                <label htmlFor='market'>Market: </label>
                <input 
                    type='text' 
                    name='market' 
                    id='market'    
                    onChange={this.handleChange}/><br />
                <button id='submit' value='submit'>Submit</button>
            </form>
        </div>
        )
    }
}
