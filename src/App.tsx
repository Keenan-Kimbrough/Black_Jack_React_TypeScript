import React from 'react';
import Deck from './components/Deck'
import HandView from './components/HandView'
import Player from './components/Player'
import './App.css'
// third party library types
//angular brackets mean  you can pass a paraemeter type to type <>
//angular brackets gnerics type <HTMLInputElement>




//type northAmericanPlayers = player | canadianPlayer // union 
/* how to add types to function 
 const func: "(a:string , b:number, c: boolean) => boolean(value that comes back from return/ or void/ when nothint
 )= (a,b,c) => {

}
props is a object, define ahead of time, interface are extendable like class compoents
*/

//private -- access inside of player/ default it is private
//public when you can access outside player
//protected access in subclasses

// generic input
 //public getScore ():  {


 //}



 //interface for app state

 interface AppState {

  deck: Deck;
  players: Player[];// same as typing out " Array<Player>"
  playerTurn: number;
  displayMessage?: string;
  gameOver: boolean;

 }

 interface AppProps{
   
 }
class App extends React.Component<AppProps,AppState> {
  
  //private is anything inside the class can access it , public means anything can access it
    baseState = {
    deck: new Deck(),
    players: [new Player(), new Player()],
    playerTurn: 0,
    displayMessage: " Hey Let's play BlackJack Together :)",
    gameOver: false,
    score: 0
    }
  constructor (props: AppProps) {

   super(props)

 


    this.playerHits = this.playerHits.bind(this)
    this.playersPasses = this.playersPasses.bind(this)
    this.newGame = this.newGame.bind(this)
    this.state = { 
      ...this.baseState, players:[new Player(), new Player()]
      

    }
    // show copy this is using the same array since it is not a deep copy, deep copy
    
  }




checkIfGameOver = () => {
  const { players} = this.state
  //loop through all the players, if none have passed of loss game over
  // if I use in instead of "of" it would use the index instead of players
 
  for (const player of players){
      if (  player.hasPlayerPassed === false && player.hasPlayerLoss === false)
      { console.log(player.hasPlayerPassed)
        console.log(player.hasPlayerLoss)
          return false
      } 
      return true
  }
  


}
  //-----------------------------------------
  beginsNextPlayersTurn = () => {
    if (this.checkIfGameOver()) {
      this.setState ({
        displayMessage:'You lost the Game :(. Press New game to try again!',
        gameOver: true
      })
      // figure out winner
      //reset the game functionality
     
    }
    else {
      const {playerTurn, players} = this.state
      const updatedPlayersTurn = (playerTurn + 1)%players.length
      console.log(players.length)
console.log('this is the state of players turn', updatedPlayersTurn, playerTurn)
      this.setState( {
       playerTurn: updatedPlayersTurn
       //loops through 0 and 1
       // percentage at the end of it.
      }
       )

    }
      
  }

  // the above is the constructor which initializes the begining state of APP


  //these are the methods that add functanility to the game below..

  // this begins next player turn

 

// player hits function
  playerHits() {
    //
  
    

    const {deck,players,playerTurn} = this.state
   

    
    const updatedPlayers =[
      ...players]
  
   // review static methods

    const updatedDeck =  Deck.clone(deck)
    //have to use arrow function in the deck class to get the getCard() method or it will not work! Very Important

    const newCard1 = updatedDeck.getCard()

    updatedPlayers[playerTurn].addCard(newCard1)
console.log(updatedPlayers[playerTurn].getScore(newCard1))

    if (updatedPlayers[playerTurn].getScore(newCard1) > 21) {
      updatedPlayers[playerTurn].hasPlayerLoss = true

  } else {
    console.log(updatedPlayers[playerTurn].hasPlayerLoss)
    updatedPlayers[playerTurn].hasPlayerLoss = false
  }
  
  
    this.setState ({
      deck: updatedDeck,
      players: updatedPlayers
    
    

    })

    if (this.checkIfGameOver()) {
      this.setState ({
        displayMessage:'You lost the Game :(. Press New game to try again!',
        gameOver: true
      })}
    this.beginsNextPlayersTurn()
  }
  

  //player passes function handler

  playersPasses() {
    const {players, playerTurn} = this.state
    const updatedPlayers = [
      ...players
    ]
updatedPlayers[playerTurn].hasPlayerPassed = true

this.setState ({
  players: updatedPlayers
})
//begins next turn
this.beginsNextPlayersTurn()
  }



  newGame ()  {
    this.setState({
      ...this.baseState, players:[new Player(), new Player()]
    })
  }
//render hand handler

 
//   renderHand = (player) => {
  
//     return <div > 
//       {player}
//       {player.hand.map(Card =>  ( <div > 
// {Card}
// </div> 
//       ))}
//     </div>
//   }


  
  render () { 

    
   const {players, playerTurn} = this.state
  
  //  const donot = this.state.map((card)=> {<div>
  //   {card}
  // </div>} )
  
    // const displayHand = this.state.players.map(this.renderHand) 
    
    
    

    return ( <div className="container1 ">
<header>
  
      <div className="row">
        <div className="col-sm">  </div>
        <div className="col-sm">Keenan's Blackjack Game </div>
        <div className="col-sm"> </div>
        </div>
        </header>
<h1>
      <div className="row">
        <div className="col-sm"> </div>
         <div className="col-sm"> <button  className="btn btn-primary" onClick={this.newGame}> New Game </button> </div>
         <div className='col-sm'> </div>
         </div>

         </h1>
        <h2>

       <div className="row"> 
       <div className='col-sm'></div>
       <div className='render'></div>
         <div className="col-sm" id="keenan"> Player Turn {playerTurn}</div>
         <div className='col-sm'></div>
         </div>
         </h2>
         <h3 className='container'>
        
         <div className="row player-1">    
         <div className="col-sm"> Player One Hand </div>
        
         
           
           <div className='row'>
          <HandView player={players[0]}/>
          </div>
          </div>
           
         <div className='row player-2'>
        <div className="col-sm">  Player Two Hand </div>
         
        
        <div className='row handview '>
          <div className='col-sm'> <HandView player={players[1]}/></div>
          </div>
          </div>
          
          </h3>

        <div className='row'>
        
          <button className=" col-sm btn btn-primary btn-lg active"  disabled={this.state.gameOver} onClick={this.playerHits} > Hit me </button>
          <button className=" col-sm btn btn-secondary btn-lg active" onClick={this.playersPasses}>Pass  </button>
          </div>
          <div className="row"> 
          <div className="col-sm"> </div>
          <div className=" col-sm alert alert-primary" > Message: {this.state.displayMessage} </div>
          
          <div className="col-sm"> </div>
          </div>
          <footer>
           
            Keenan <a href="https://github.com"> Keenan's Github</a>
            
            </footer>
            
          </div>

         
           )
          }
        
}

export default App;
