import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Title extends Component {
    render() {
        return (
            <div className='Title' id='title-img'>
                <Link to='/'>
                    <img src="../images/farm-stan-logo.png"/>
                </Link>
            </div>
        )
    }
}
