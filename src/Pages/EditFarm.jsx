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
        event.preventDefault()
        axios.put('https://farm-stan-api.herokuapp.com/users/update', {
            email: '',
            password: '',
            displayName: '',
            address: '',
            phoneNumber: '',
            items: '',
            market: '',
        }).then(res => {
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
        axios.delete(`https://farm-stan-api.herokuapp.com/users`)
    }

    render() {
        return (
            <div className='editFarm'>
                <h1>Edit Farm</h1>
                <form className='edit-form' onSubmit={this.handleSubmit} onDelete={this.handleDelete}>
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
                    <button id='delete' value='delete'>Delete User</button>
                </form>
            </div>
        )
    }
}
