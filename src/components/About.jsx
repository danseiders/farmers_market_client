import React, { Component } from 'react'
import Footer from './Footer'


export default class About extends Component {
    render() {
        return (
            <div className="About">
                <p className="infoDump">Browse all your local farmer's markets and farms in one easy place. Find updated farm offerings in real time, and locations and schedules.</p>
                <div className='About-footer'>
                <Footer />
                </div>
            </div>
        )
    }
}
