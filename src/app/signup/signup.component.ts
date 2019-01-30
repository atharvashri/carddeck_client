import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { CardDeckService } from '../services/card-deck.service'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {



  constructor(private formBuilder: FormBuilder, private cardDeckService: CardDeckService) { }

  ngOnInit() {

  }

  userForm = this.formBuilder.group({
    email: ['', Validators.required],
    name: ['', Validators.required],
    age: ['', Validators.required],
    skill: ['', Validators.required]
  });

  signUpUser() {

    if (this.userForm.invalid) {
      alert("Please complete the form before submission");
      return;
    }


    let form = new FormData();

    form.append('email', this.userForm.controls.email.value);
    form.append('name', this.userForm.controls.name.value)
    form.append('age', this.userForm.controls.age.value)
    form.append('skill', this.userForm.controls.skill.value)

    this.cardDeckService.createUser(form).subscribe(
      (data) => {
        alert('user is added successfully')
      },
      (error) => {
        console.log(error)
        alert('error while adding a user')
      }
    )

  }

}
