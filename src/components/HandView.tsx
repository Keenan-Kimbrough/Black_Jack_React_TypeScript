import CardView from './CardView'
import React from 'react'

class HandView extends React.Component {
    constructor(props) {
        super()
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