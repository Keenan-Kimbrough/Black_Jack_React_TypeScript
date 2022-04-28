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

        const cardDiv = player.hand.map((card) =>(<CardView card={card} />))
        return ( 
            <div> {cardDiv}</div>
                )
    }
}
export default HandView