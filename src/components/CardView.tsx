import Card from './Card'
import React from 'react'


interface CardViewProps{
card: Card; 

}

class CardView extends React.Component<CardViewProps> {

    constructor(props:CardViewProps) {

        super(props);

        
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