import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Wizard extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            address: '',
            city: '',
            zip: 0
        }
        this.handleName = this.handleName.bind(this)
        this.handleAddress = this.handleAddress.bind(this)
        this.handleCity = this.handleCity.bind(this)
        this.handleZip = this.handleZip.bind(this)
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
                <input value={this.state.name} onChange={this.handleName}/>
                <input value={this.state.address} onChange={this.handleAddress}/>
                <input value={this.state.city} onChange={this.handleCity}/>
                <input value={this.state.zip} onChange={this.handleZip}/>
            </div>
            
        )
    }
}

export default Wizard