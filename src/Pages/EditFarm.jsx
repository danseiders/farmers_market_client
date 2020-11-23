import React, { Component } from 'react'
import axios from 'axios'

export default class EditFarm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            displayName: '',
            address: '',
            phoneNumber: '',
            items: '',
            market: '',
            redirect: null
        }
    }

    componentDidMount() {
        axios.get(`https://farm-stan-api.herokuapp.com/farms`)
        .then(res => {
            console.log(res)
            this.setState({

            })
        })
    }

    render() {
        return (
            <div>
                <h1>Edit Farm</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='email'>E-mail:</label>
                    <input
                        type='text'
                        name='email'
                        id='email'
                        onChange={this.handleChange}/><br/>
                    <label htmlFor='password'>Password:</label>
                    <input
                        type='text'
                        name='password'
                        id='password'
                        onChange={this.handleChange}/><br/>
                    <label htmlFor='displayName'>Username:</label>
                    <input
                        type='text'
                        name='displayName'
                        id='displayName'
                        value={sessionStorage.displayName}
                        onChange={this.handleChange}/><br/>
                    <label htmlFor='address'>Address:</label>
                    <input
                        type='text'
                        name='address'
                        id='address'
                        onChange={this.handleChange}/><br/>
                    <label htmlFor='phoneNumber'>Phone Number:</label>
                    <input
                        type='text'
                        name='phoneNumber'
                        id='phoneNumber'
                        onChange={this.handleChange}/><br/>
                    <label htmlFor='items'>Grocery Items:</label>
                    <input
                        type='text'
                        name='items'
                        id='items'
                        onChange={this.handleChange}/><br/>
                    <label htmlFor='market'> Market:</label>
                    <input
                        type='text'
                        name='market'
                        id='market'
                        onChange={this.handleChange}/><br/>
                    <button id='submit' value='submit'>Submit</button>
                </form>
            </div>
        )
    }
}
