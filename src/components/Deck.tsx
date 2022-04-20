import React from 'react'


class Deck extends React.Component {
    constructor (props) {
        super()

        this.deck = this.suits.flatMap((suit) =>
        this.values.map((value) => new Card(value, suit))
      );
    }

 getCard = () => {


 } 

        render () {
            <div>


            </div>
        }
    
    values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
    suits = ["♦", "♣", "♥", "♠"];
}

export default Deck