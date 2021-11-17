import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  

  constructor() {
    
  }

  ngOnInit(): void {}

  onLogin(userEmail: string, userPassword: string) {
     // You can add logic here !
  }
}
