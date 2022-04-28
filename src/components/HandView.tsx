import CardView from './CardView'
import React from 'react'
import Player from'./Player'
interface HandViewProps{
   player: Player
   
}




class HandView extends React.Component<HandViewProps> {
    constructor(props: HandViewProps ) {
        super(props)

        
    }


    render () {

        const {player} = this.props 
        console.log(player)

        const cardDiv = player.hand.map((card) =>(<div key={Math.random()}> <CardView card={card}/> </div>))
 
        console.log(cardDiv)
        return ( 
           
            <div> {cardDiv}
            
            </div>
                )
    }
}
export default HandView