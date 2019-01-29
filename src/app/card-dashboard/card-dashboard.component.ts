import { Component, OnInit } from '@angular/core';
import { DropEvent } from 'ng-drag-drop';
import { CardsUtil, Card } from './cardsUtils'
import { CardDeckService } from '../services/card-deck.service'

@Component({
  selector: 'app-card-dashboard',
  templateUrl: './card-dashboard.component.html',
  styleUrls: ['./card-dashboard.component.css']
})


export class CardDashboardComponent implements OnInit {


  constructor(private cardDeckService: CardDeckService) { }

  shuffledCards = [];
  unShuffledCards = [];

  cardsToRemoved = [];

  isResetVisible = false;

  droppedCards = {
    heartsDropped: [],
    spadesDropped: [],
    diamondDropped: [],
    clubDropped: []
  }

  ngOnInit() {
    //this.showCards();
    this.cardDeckService.getCardDeckData({ user: 'abc' }).subscribe(
      (data) => {
        this.showCards(data);
      },
      () => {

      }
    )
  }

  shuffle(array) {

    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  getSymbol(symbol) {
    let scope;

    switch (symbol) {
      case '♥':
        scope = 'heart'
        break;
      case '♦':
        scope = 'diamond'
        break;
      case '♠':
        scope = 'spades'
        break;
      case '♣':
        scope = 'club'
        break;

      default:
        break;
    }
    return scope
  }

  getColor(suit) {
    if (suit == "♥" || suit == "♦") {
      return "red"
    }
    else {
      return "black"
    }
  }

  onCardDrop(e: DropEvent) {
    let _cardEventType = e.dragData.event;
    this.droppedCards[_cardEventType].push(e.dragData);
    this.removeItem(e.dragData, this.shuffledCards);
  }

  removeItem(item: Card, list: Array<Card>) {
    let index = list.map(function (e) {
      return e
    }).indexOf(item);
    list.splice(index, 1);

    if (this.shuffledCards.length == 0) {
      this.isResetVisible = true
    }
  }

  makeCopyOfUnshuffledCards() {
    return new Promise((resolve) => {
      CardsUtil.cards.forEach((element, index) => {
        this.unShuffledCards.push(element)
        if (index == CardsUtil.cards.length - 1) {
          resolve(this.unShuffledCards);
        }
      })
    })
  }

  checkEventsToRemoveCards(deckEvents) {
    return new Promise((resolve) => {
      deckEvents.forEach((element, index) => {
        this.cardsToRemoved.push(element)
        if (deckEvents.length - 1 == index) {
          resolve()
        }
      });
    })

  }

  collectCardsTobeRemoved(decks) {
    let checkCounter = 0;
    return new Promise((resolve) => {
      Object.keys(decks.deckData).forEach(element => {
        this.checkEventsToRemoveCards(decks.deckData[element]).then(() => {
          if (Object.keys(decks.deckData).length - 1 == checkCounter) {
            let applyFilter = this.cardsToRemoved;

            this.cardsToRemoved.forEach((element, index) => {
              this.unShuffledCards.splice(element, 1)
              if (this.cardsToRemoved.length - 1 == index){
                resolve(this.unShuffledCards);
              }
            });

            
          }
          else {
            checkCounter++
          }

        })
      });
    })

  }

  showCards(decks) {
    //make a copy of the Unshuffled Cards and then proceed
    this.cardsToRemoved = [];
    this.makeCopyOfUnshuffledCards()
      .then((_unShuffledCards: Array<any>) => {
        if (decks != null) {
          this.droppedCards = decks.deckData;
          return this.collectCardsTobeRemoved(decks)
        }
        else {
          return Promise.resolve(_unShuffledCards);
        }
      })
      .then((savedCardsRemoved) => {
        this.shuffledCards = this.shuffle(savedCardsRemoved);
      })
  }

  resetCards() {
    this.isResetVisible = false;
    this.droppedCards = {
      heartsDropped: [],
      spadesDropped: [],
      diamondDropped: [],
      clubDropped: []
    }
    this.showCards(null);
  }

}
