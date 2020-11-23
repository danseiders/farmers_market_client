import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <div className="Nav">
                <ul className='Nav-links'>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/markets'>
                        <li>Markets</li>
                    </Link>
                    <Link to='/farms'>
                        <li>Farms</li>
                    </Link>
                </ul>
            </div>
        )
    }
}