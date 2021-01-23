import React, { Component } from 'react';

import API from '../utils/API'

import CardDB from './CardDB';

class ListAllEntries extends Component {
    constructor(props) {
        super(props)
        this.state = {
            settlements: [],
        }
    }  

    //convert first letter of string to uppercase
  firstLetterCapital = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  //need to recode to loop through all the settlements and create a card for each one!
    AllEntries = () => {
        API.getSettlements().then(res => {
            console.log('its rendering' + JSON.stringify(res.data))
            this.setState({
                settlements: [res.data[0]]
            })
        }).catch(err => console.log(err))
    }

    componentDidMount() {
        this.AllEntries(); 
    }
    
    //need to convert
    render() {
        console.log(this.state.settlements[0])
        return (
            <div>
                {this.state.settlements.map((town) => (
                    
                    <CardDB 
                        name={town.name}
                        government={town.government}
                        type={town.type}
                        size={town.size}
                        races={town.population}
                        description={town.description}
                        happening={town.otherInformation}
                    />
                ))}
            </div>
        )
    }
}
export default ListAllEntries;