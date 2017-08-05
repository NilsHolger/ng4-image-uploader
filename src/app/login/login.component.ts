import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  msg: string;

  constructor(private authService: AuthenticationService, private router: Router) { }

  signIn() {
    this.authService.login({
      email: this.email,
      password: this.password
    })
    .then(resolve => this.router.navigate(['gallery']))
    .catch(error => this.msg = error.message);
  }

  ngOnInit() {
  }

}
