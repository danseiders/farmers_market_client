import React, { Component } from 'react'
import axios from 'axios'

export default class EditFarm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            address: '',
            phoneNumber: '',
            email: '',
            market: '',
            redirect: null
        }
    }

    componentDidMount() {
        axios.get(`https://farm-stan-api.herokuapp.com/farms`)
        .then(res => {
            console.log(res)
        })
    }

    render() {
        return (
            <div>
                <h1>Edit Farm</h1>
            </div>
        )
    }
}
