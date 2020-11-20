import React, { Component } from 'react'
import axios from 'axios'
import Header from '../components/Header'

export default class Markets extends Component {
    constructor(props) {
        super(props)
        this.state = {
            markets: []
        }
    }

    componentDidMount() {
        axios.get(`https://farm-stan-api.herokuapp.com/markets`)
        .then(res => {
            console.log(res)
            this.setState({ markets: res.data.markets })
            console.log(this.state.markets)
        })
    }

    render() {
        return (
            <div className='Markets'>
                <h1>MARKETS:</h1>
                <ul className='Markets-Item'>
                {this.state.markets.map((market) => 
                <li key={market._id}>{market.name} | {market.address}</li>
                )}
                </ul>
            </div>
        )
    }
}