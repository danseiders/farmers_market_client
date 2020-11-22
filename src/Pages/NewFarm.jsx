import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router'

export default class NewFarm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            address: '',
            phoneNumber: '',
            email: '',
            market: '',
            redirect: null
        }
    }
    handleChange = (event) => {
        this.setState({[event.target.id]: event.target.value })
    }
    handleSubmit = (event) => {
        console.log(event.target)
        event.preventDefault()
        axios.post('https://farm-stan-api.herokuapp.com/farms', {
            name: this.state.name,
            address: this.state.address,
            phoneNumber: this.state.phoneNumber,
            email: this.state.email,
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
            })
        })
    }
    render() {
        if (this.state.redirect === true) {
            return <Redirect to="/farms" />
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor='name'>Farm Name: </label>
                <input 
                    type='text' 
                    name='name' 
                    id='name'    
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
                <label htmlFor='email'>Email: </label>
                <input 
                    type='text' 
                    name='email' 
                    id='email'    
                    onChange={this.handleChange}/><br />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}



