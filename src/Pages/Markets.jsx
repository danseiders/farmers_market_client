import React, { Component } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'


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
                <h1>FARMERS MARKETS</h1>
                    <div className='Markets-Item'>
                    {this.state.markets.map((market) => 
                        <div className='Market-item' key={market._id}>
                            <Link to={`/markets/${market._id}`}>
                            {market.name}
                            </Link>
                            <img src={market.image}></img>
                            {market.address}
                        </div>
                    )}
                    </div>
                
                <div className='Footer'>
                <Footer />
                </div>
            </div>
        )
    }
}