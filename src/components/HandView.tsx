import CardView from './CardView'
import React from 'react'
interface HandProps{
    hand: Array<any>
    CardView: 
}



interface AppProps{
player: Array<string>

}
class HandView extends React.Component<AppProps,HandProps,> {
    constructor(props: AppProps ) {
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