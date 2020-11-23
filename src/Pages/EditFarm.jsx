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
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount() {
        const token = sessionStorage.userAuthToken
        console.log()
        axios.get('https://farm-stan-api.herokuapp.com/users', {
            headers: {
                Authorization: 'bearer ' + token,
            }
        })
        .then(res => {
            const user = res.data.user
            console.log(res)
            this.setState({
                displayName: user.displayName,
                address: user.address,
                email: user.email,
                market: user.market,
                phoneNumber: user.phoneNumber,
                items: user.items
            })
        })
    }
    handleChange(event){
        this.setState({ [event.target.id]: event.target.value})
    }

    handleSubmit(event){
        const token = sessionStorage.userAuthToken
        event.preventDefault()
<<<<<<< HEAD
        axios.put('https://farm-stan-api.herokuapp.com/users/update', {
            email: '',
            password: '',
            displayName: '',
            address: '',
            phoneNumber: '',
            items: '',
            market: '',
        }).then(res => {
=======
        axios.put(`https://farm-stan-api.herokuapp.com/users/update`, {
            email: this.state.email,
            password: this.state.password,
            displayName: this.state.displayName,
            address: this.state.address,
            phoneNumber: this.state.phoneNumber,
            items: this.state.items,
            market: this.state.market
        }, { headers: {
                Authorization: 'bearer ' + token,
            }}).then(res => {
>>>>>>> 5687f029adcf480adbb00d69c96b7ccab061761c
            console.log(res)
        }).catch(err => {
            console.log(err)
        }).then(() => {
            this.setState({
                redirect: true
            })
        })
    }

    handleDelete(event){
        console.log(event)
        const token = sessionStorage.userAuthToken
        axios.delete(`https://farm-stan-api.herokuapp.com/users/delete`, { 
            headers: {
                Authorization: 'bearer ' + token,
            }}
    )}
    render() {
        return (
            <div className='editFarm'>
                <h1>Edit Farm</h1>
                <form className='edit-form' onSubmit={this.handleSubmit}>
                    <label htmlFor='email'>E-mail:</label>
                    <input
                        type='text'
                        name='email'
                        id='email'
                        defaultValue={this.state.email}
                        onChange={this.handleChange}/><br/>
                    <label htmlFor='displayName'>Username:</label>
                    <input
                        type='text'
                        name='displayName'
                        id='displayName'
                        defaultValue={this.state.displayName}
                        onChange={this.handleChange}/><br/>
                    <label htmlFor='address'>Address:</label>
                    <input
                        type='text'
                        name='address'
                        id='address'
                        defaultValue={this.state.address}
                        onChange={this.handleChange}/><br/>
                    <label htmlFor='phoneNumber'>Phone Number:</label>
                    <input
                        type='text'
                        name='phoneNumber'
                        id='phoneNumber'
                        defaultValue={this.state.phoneNumber}
                        onChange={this.handleChange}/><br/>
                    <label htmlFor='items'>Grocery Items:</label>
                    <input
                        type='text'
                        name='items'
                        id='items'
                        defaultValue={this.state.items}
                        onChange={this.handleChange}/><br/>
                    <label htmlFor='market'> Market:</label>
                    <input
                        type='text'
                        name='market'
                        id='market'
                        defaultValue={this.state.market}
                        onChange={this.handleChange}/><br/>
                    <button id='submit' value='submit'>Submit</button>
                </form>
                    <button id='delete' value='delete' onClick={this.handleDelete}>Delete User</button>
            </div>
        )
    }
}
