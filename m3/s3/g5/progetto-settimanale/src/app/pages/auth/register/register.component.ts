import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { RegisterData } from 'src/app/interfaces/register-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private authSvc: AuthService, private router: Router) {}

  data: RegisterData = {
    email: '',
    password: '',
    name: '',
    surname: '',
  };

  register() {
    this.authSvc.signUp(this.data).subscribe((accessData) => {
      alert('Registrazione avvenuta con successo');
      this.router.navigate(['/auth']);
    });
  }
}
