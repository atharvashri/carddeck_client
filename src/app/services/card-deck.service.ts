import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardDeckService {

  url: string = "http://localhost:8080"

  constructor(public http: HttpClient) { }

  getCardDeckData(user) {
    return this.http.post(this.url + '/user/getdeckstate', user)
  }
}
