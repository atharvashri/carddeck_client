import { Component, OnInit } from '@angular/core';
import { CardDeckService } from '../services/card-deck.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  playeremail: string;

  constructor(private cardDeckService: CardDeckService, private router:Router) { }


  loggedIn = false

  ngOnInit() {
  }

  AuthenticateUser() {
    let user = {
      email: this.playeremail
    }
    this.cardDeckService.loginUser(user).subscribe(
      () => {
        this.cardDeckService.addloginStatus(true);
        localStorage.setItem('user', user.email)
        localStorage.setItem('isAuth', 'authenticated')
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        alert("Please enter valid email address to login");
      }
    )

  }


}
