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
        axios.get(`http://farm-stan-api.herokuapp.com/`)
        .then(res => {
            console.log(res)
            this.setState({ vegetables: res.data })
        })
    }

    render() {
        return (
            <div>
                <h1>VEGETABLES:</h1>
                {this.state.vegetables}
                {/* <ul>
                {this.state.vegetables.map((vegie) => 
                <li>{vegie.name}</li>
                )}
                </ul> */}
            </div>
        )
    }
}
