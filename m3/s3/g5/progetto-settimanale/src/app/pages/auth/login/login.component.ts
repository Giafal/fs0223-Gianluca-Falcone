import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginData } from 'src/app/interfaces/login-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authSvc: AuthService, private router: Router) {}

  data: LoginData = {
    email: '',
    password: '',
  };

  login() {
    this.authSvc.login(this.data).subscribe((accessData) => {
      alert(`Sei loggato come ${accessData.user.name}`);
      this.router.navigate(['/dashboard']);
    });
  }
}
