class Card {
    constructor(type, suit)
    {
    this.type = type
    this.suit = suit
        this.value = this.getCardCount()
    }
  getCardCount =() => {
  if (this.type ==='J')
  {
  return 10 }
  else if (this.type ==='Q'){
     return 10
  } else if (this.type ==='K') {
  return  10
  }
  else if ( this.type ==='A')
  {
  return 11
  } else {return parseFloat(this.type)}
  // parseFloat returns any number with other random strings in them and returns the number
  // Or I could have done this
  // if (card == 'J' || card == 'K' ||  card == 'Q' ) {return count 10}
  }
  }
  export default Card
  