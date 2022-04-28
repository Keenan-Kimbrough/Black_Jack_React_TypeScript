import Card from './Card'
import React from 'react'

import './CardView.css'


interface CardViewProps{
card: Card; 

}

class CardView extends React.Component<CardViewProps> {

    
    render () {
        

        const {card} = this.props
        const {type, suit} = card
//const className = type+' '+suit
// make for loop to correspond with value 
//const className= ` ${type} ${suit}`
        return (<div> 
 
 
 <div key={type} className={`${card.getCardCount()?'cards':''}`} > {type} {suit} </div>
 

 

        </div>)
    }



}

export default CardView