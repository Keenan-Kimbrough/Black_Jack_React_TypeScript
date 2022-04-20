import React from 'react';
import logo from './logo.svg';
import Deck from './components/Deck'
interface Player {
  hand: any,
  hasPlayerPassed: boolean,
  hasPlayerLoss: boolean,
  playerName: string

}
class Player {
  constructor () {
    this.hand = []
    this.hasPlayerPassed = false
    this.hasPlayerLoss = false
    this.playerName = ''
  }

  addCard (getCard: string) {

  }

 getScore () {

 }

}
class App extends React.Component {
  baseState = {
    deck: new Deck();
    players: [new Player (), new Player ()],
    playerTurn: 0,
    displayMessage: "Hey Let's Play Black Jack",
    gameOver: false

  }
  constructor () {
    super()
this.state = {
    ...this.baseState, players: [ new Player(), new Player ()]
  }
}
}

render () {
  return <div> 

    <div> display Message : {this.state.displayMessage}</div>
  </div>
}

export default App;
