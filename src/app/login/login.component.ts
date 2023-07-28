import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from '../model/userModel';
import { Trucate } from '../pipes/Truncatedata';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService){
    this.user = {
      userName: '',
      password: '',
      emailAddress:'test'
    };
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  user:User;

  onSubmit() {
    debugger;
    alert(1);
    this.user.userName = new Trucate().transform(this.user.userName);

    this.authService.login(this.user);
    // Here you can add logic to validate the user's credentials
    // and make an API call to the backend for authentication.
  }

}
