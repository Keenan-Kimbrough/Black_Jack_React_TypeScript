import Card from './Card'
import React from 'react'
import './CardView.css'
interface CardProps {
    type: string;
    suit: string
}
interface CardViewProps{
card: CardProps; 
type: string;
suit: any;
}

class CardView extends React.Component<CardViewProps,CardProps> {

    constructor(props:CardViewProps) {

        super(props);

        
    }

    render () {
        

        const {card} = this.props
        const {type, suit}: CardProps = card
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