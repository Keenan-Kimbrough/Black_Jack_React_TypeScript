import React from 'react'
import { getEnvironmentData } from 'worker_threads';
import getData from './GetData'


class Deck  {

   
  
    constructor () {
        

        this.deck = this.suits.flatMap((suit) =>
        this.values.map((value) => new Card(value, suit))
      );
    }

 getCard ():string  {
   
return this.deck.pop()
 
 } 

        
    
    values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
    suits = ["♦", "♣", "♥", "♠"];
}

export default Deck
type Decktype {
    deck: object


}
export const dataData = async () => {
    const users = await getData<Decktype[]>
    ('https://deckofcardsapi.com/api/deck/new/shuffle/');

}
/*
//  const getdeck = function () {
    return fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/`)
    .then((response) => response.json())
    .then((data) => data.deck_id)
    .then((deck) => {
      return fetch(
        `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=52`
      )
        .then((response) => response.json())
        .then((data) => data.cards)
        .then(
          (cards) =>
            cards
              .map((card) => card.code)
              .map((card_code) =>
                card_code.replace(/[DCSH0]/g, function (char) {
                  return replacementMap[char];
                })
              )
          // .map(build Cards)
        );
    });
};

*/
