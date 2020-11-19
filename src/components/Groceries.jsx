import React, { Component } from 'react'
import axios from 'axios'

export default class Groceries extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vegetables: []
        }
    }

    componentDidMount() {
        axios.get(`https://farm-stan-api.herokuapp.com/groceries`)
        .then(res => {
            console.log(res)
            this.setState({ vegetables: res.data })
        })
    }

    render() {
        return (
            <div>
                <h1>VEGETABLES:</h1>
                <ul>
                {this.state.vegetables.map((vegie) => 
                <li>{vegie.name}</li>
                )}
                </ul>
            </div>
        )
    }
}
