import Card from './Card'

class Player  {
    public hand: Array<Card>;
    public hasPlayerPassed: boolean;
    public hasPlayerLoss: boolean;
    public playerName:string;
    
  
    public constructor () {
     
  
      this.hand = [];
      this.hasPlayerPassed = false;
      this.hasPlayerLoss = false;
      this.playerName = '';
    }
  
    public addCard (getCard:string): void {
      
  
    } 
    public getScore(): number {

        // reduce array methods

        return 0
    }

    
}

    export default Player
