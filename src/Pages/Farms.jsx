import React, { Component } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import Groceries from './Groceries'

export default class Farms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            farms: []
        }
    }

    componentDidMount() {
        axios.get(`https://farm-stan-api.herokuapp.com/farms`)
        .then(res => {
            console.log(res)
            this.setState({ farms: res.data })
        })
    }

    render() {
        return (
            <div>
                <h1>FARMS:</h1>
                {this.state.farms.map((farm) => 
                <div className='Farm-item'>
                    <h3 key={farm._id}>{farm.name}</h3>
                    <p>Markets{farm.market}</p>
                    <h5>Available This Week:</h5>
                    <ul>
                        {farm.items.forEach(veggie => {
                            <li>{veggie} | {veggie.variation}</li>
                        })
                    }
                    </ul>
                </div>
                    
                )}
            </div>
        )
    }
}