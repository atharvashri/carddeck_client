import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CardDeckService {

  url: string = "http://localhost:8080";

  public loginSub = new Subject<any>();

  constructor(public http: HttpClient) { }

  getCardDeckData(user) {
    return this.http.post(this.url + '/user/getdeckstate', user)
  }

  saveCardDeckData(deckdata) {
    return this.http.post(this.url + '/user/savedeckstate', deckdata)
  }

  //for user login and creation

  loginUser(user){
    return this.http.post(this.url + '/user/login', user)
  }

  createUser(user){
    return this.http.post(this.url + '/user/create', user)
  }

  addloginStatus(data) {
    this.loginSub.next(data);
  }
}
