import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = 'in28minutes';
  password = '';
  errorMessage = 'Invalid Credentials, check your credentials again';
  invalidLogin = false;
  //Router Instance
  //Dependency Injection
  constructor(
    private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService
  ) {}

  handleLogin() {
    const lowercaseUsername = this.username.toLowerCase();
    const lowercasePassword = this.password.toLowerCase();

    //if (lowercaseUsername === 'in28minutes' && lowercasePassword === 'dummy') {
      if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      //Redirect to welcome page
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
