import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class Wizard extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
        this.handleName = this.handleName.bind(this)
        this.handleAddress = this.handleAddress.bind(this)
        this.handleCity = this.handleCity.bind(this)
        this.handleState = this.handleState.bind(this)
        this.handleZip = this.handleZip.bind(this)
        this.postThatHouse = this.postThatHouse.bind(this)
    }
    
    postThatHouse(){
        axios.post('/api/houses', {
            propertyname: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        }).then(() => {
            this.setState({
                name: '',
                address: '',
                city: '',
                state: '',
                zip: ''
            })
        })
            
    }

    handleName(e){
        this.setState({
            name: e.target.value
        })
    }
    handleAddress(e){
        this.setState({
            address: e.target.value
        })
    }
    handleCity(e){
        this.setState({
            city: e.target.value
        })
    }
    handleState(e){
        this.setState({
            state: e.target.value
        })
    }
    handleZip(e){
        this.setState({zip: e.target.value})
    }
    render(){
        console.log(this.state)
        return(
            <div>
                Wizard
                <Link to='/'>
                <button>Cancel</button>
                </Link>
                <br />
                Property Name:
                <input value={this.state.name} onChange={this.handleName}/>
                <br />
                Address:
                <input value={this.state.address} onChange={this.handleAddress}/>
                <br />
                City:
                <input value={this.state.city} onChange={this.handleCity}/>
                <br />
                State:
                <input value={this.state.state} onChange={this.handleState} />
                <br />
                Zip Code:
                <input value={this.state.zip} onChange={this.handleZip}/>
                <br />
                <br/>
                <Link to='/'>
                <button onClick={this.postThatHouse}>Complete!</button>
                </Link>
            </div>
            
        )
    }
}

export default Wizard