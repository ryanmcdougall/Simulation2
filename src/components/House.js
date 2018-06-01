import React, { Component } from 'react'

function House(props){
    console.log(props.listOfHouses.propertyname)
    return(
        <div> 
            <button>X</button>
            <br />
            Property Name: 
            {props.listOfHouses.propertyname}
            <br />
            <br />
            Address: 
            {props.listOfHouses.address}
            <br />
            <br />
            City: 
            {props.listOfHouses.city}
            <br />
            <br />
            State: 
            {props.listOfHouses.state}
            <br />
            <br />
            Zip Code: 
            {props.listOfHouses.zip}
            <br />
            <br />
            <hr />
            <br />
        </div>
    )
}

export default House