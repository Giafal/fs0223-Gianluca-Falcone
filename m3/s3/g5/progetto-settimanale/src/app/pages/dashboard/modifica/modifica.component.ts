import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FullUser } from 'src/app/interfaces/full-user';

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.scss'],
})
export class ModificaComponent {
  user: FullUser = {
    email: '',
    password: '',
    name: '',
    surname: '',
    id: 0,
  };

  constructor(
    private userSvc: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.userSvc.getUser(params.id).subscribe((user: any) => {
        user.password = '';
        this.user = user;
      });
    });
  }

  modifica(user: FullUser): void {
    this.userSvc.put(user).subscribe((data) => {
      this.router.navigate(['/dashboard']);
    });
  }
}
