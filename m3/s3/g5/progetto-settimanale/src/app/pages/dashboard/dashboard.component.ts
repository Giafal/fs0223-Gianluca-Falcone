import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UsersService } from './users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  userArr: User[] = [];

  constructor(private userSvc: UsersService) {}

  ngOnInit() {
    this.userSvc.get().subscribe((res) => {
      this.userArr = res;
    });
  }

  del(id: any): void {
    this.userSvc.delete(id).subscribe((res) => {
      this.userArr.splice(this.userArr.indexOf(id), 1);
    });
    this.userSvc.get().subscribe((res) => {
      this.userArr = res;
    });
  }
}
