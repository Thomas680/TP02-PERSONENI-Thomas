import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {

  civilite : string = "";
  firstname : string = "";
  name : string = "";
  address : string = "";
  postalCode : string = "";
  city : string = "";
  country : string = "";
  phone : number = null;
  email : string = "";
  login : string = "";
  password : string = "";
  passwordConfirm : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  // isPasswordValid() {
  //   let password = document.getElementById('password').value;
  //   let confirmPassword = document.getElementById('password_confirm').value;
  //   if (password != confirmPassword) {
  //       document.getElementById('form_message').innerText = "Les mots de passe ne correspondent pas.";
  //       return false;
  //   } else {
  //       document.getElementById('form_message').innerText = "";
  //       return true;
  //   }
  // }


}
