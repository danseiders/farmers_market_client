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
            this.setState({ markets: res.data })
        })
    }

    render() {
        return (
            <div>
                <h1>MARKETS:</h1>
                {this.state.markets.map((market) => 
                <a href='#'>
                    <div className='Market-item' key={market._id}>
                        {market.image}
                        {market.name}
                        {market.address}
                    </div>
                </a>
                )}
                
            </div>
        )
    }
}