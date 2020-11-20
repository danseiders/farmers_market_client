import React, { Component } from 'react'

export default class NewFarm extends Component {
    render() {
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



