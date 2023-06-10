import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UsersService } from './users.service';
import { FullUser } from 'src/app/interfaces/full-user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  userArr: User[] = [];

  constructor(private userSvc: UsersService, private router: Router) {}

  ngOnInit() {
    this.userSvc.get().subscribe((res) => {
      this.userArr = res;
    });
  }

  del(id: any): void {
    this.userSvc.delete(id).subscribe((res) => {
      this.userArr.splice(this.userArr.indexOf(id), 1);
    });
  }
}
