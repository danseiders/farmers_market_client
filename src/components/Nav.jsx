import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <div className="Nav">
                <ul className='Nav-links'>
                    <NavLink exact activeClassName='active' to='/'>
                        <li>Home</li>
                    </NavLink>
                    <NavLink exact activeClassName='active' to='/markets'>
                        <li>Markets</li>
                    </NavLink>
                    <NavLink exact activeClassName='active' to='/farms'>
                        <li>Farms</li>
                    </NavLink>
                </ul>
            </div>
        )
    }
}