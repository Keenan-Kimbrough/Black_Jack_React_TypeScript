import Card from './Card'

class Player  {
    public hand: Array<Card>;
    public hasPlayerPassed: boolean;
    public hasPlayerLoss: boolean;
    public playerName:string;
    public score: number;
    
  
    public constructor () {
     
  
      this.hand = [];
      this.hasPlayerPassed = false;
      this.hasPlayerLoss = false;
      this.playerName = '';
      this.score = 0;
    }
  
    public addCard (getCard:Card): void {
        this.hand.push(getCard)
    
  
    } 

    
    public getScore(getCard:Card): any {
       
       return this.hand.reduce((prev,Card) => {
            console.log(Card.getCardCount())
           return prev += Card.getCardCount()},0)
       
        // reduce array methods

        }
    }

    


    export default Player
