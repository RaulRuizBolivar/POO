class Card extends Payment{
  constructor(id,numberCard,cvv){
    super(id);
    this.numberCard = numberCard;
    this.cvv = cvv;
  }
}
