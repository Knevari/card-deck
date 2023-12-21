export class PlayingCard {
  suit: string;
  value: string | number;
  color: string;

  constructor(suit: string, value: string | number) {
    this.suit = suit;
    this.value = value;
    this.color = ["♥", "♦"].indexOf(suit) !== -1 ? "red" : "black";
  }

  static deck() {
    const suits = ["♦", "♣", "♥", "♠"];

    const deck = suits.reduce((acc, suit) => {
      // Ace
      acc.push(new PlayingCard(suit, "A"));

      // 0-9
      for (let i = 0; i < 9; i++) acc.push(new PlayingCard(suit, i + 1));

      // King, Queen and Jack cards
      acc.push(
        new PlayingCard(suit, "K"),
        new PlayingCard(suit, "Q"),
        new PlayingCard(suit, "J")
      );
      return acc;
    }, [] as PlayingCard[]);

    return deck;
  }
}
