import Card from './Card'
import React from 'react'
import './CardView.css'
class CardView extends React.Component {

    constructor(props) {

        super();

        
    }

    render () {
        const {card} = this.props
        const {type, suit} = card
//const className = type+' '+suit
// make for loop to correspond with value 
const className= ` ${type} ${suit}`
        return (<div> 
 
 
 <div key={type} className={className}> {type} {suit} </div>
 <div> </div>

 

        </div>)
    }



}

export default CardView