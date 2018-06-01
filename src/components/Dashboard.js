import React, { Component } from 'react'
import House from './House'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Dashboard extends Component{
    constructor(){
        super();

        this.state = {
            houses: []
        }
    }

    componentDidMount(){
        axios.get('/api/houses').then(res =>{
            console.log(res.data)
            this.setState({houses: res.data})
            
        })
    }

    render(){
        let housesMapped = this.state.houses.map((e,i) => {
            return(
                <House key={i}/>
            )
        })
        return(
            <div>
                Dashboard
                <Link to='/Wizard'>
                <button>Add New Property</button>
                </Link>
                {housesMapped}
            </div>

        )
    }
}

export default Dashboard