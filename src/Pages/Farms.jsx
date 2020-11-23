import React, { Component } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import Groceries from './Groceries'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import '../App.css'


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
            this.setState({ farms: res.data.farm })
        })
    }

    render() {
        return (
            <div className='Farms'>
                <h1>FARMS:</h1>
                {this.state.farms.map((farm) => 
                <div className='Farms-item'>
                    <h3 key={farm._id}>{farm.displayName}</h3>

                    <h5>Markets:</h5>
                    <p>{farm.market}</p>
                    <h5>Available This Week:</h5>
                    <p>{farm.items}</p>
                </div>    
                )}
                <Link to="/farms/edit">Edit Your Farm</Link>
                <div className='Footer'>
                    <Footer />
                </div>
            </div>
        )
    }
}