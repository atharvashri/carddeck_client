import { Component, OnInit } from '@angular/core';
import { CardDeckService } from './services/card-deck.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private cardDeckService: CardDeckService) { }

  loggedIn = false;

  ngOnInit() {
    if (localStorage.getItem('isAuth') == 'authenticated') {
      this.loggedIn = true;
    }
  }
}
