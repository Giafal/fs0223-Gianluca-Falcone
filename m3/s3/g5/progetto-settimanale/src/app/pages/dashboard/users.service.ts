import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccessData } from 'src/app/interfaces/access-data';
import { User } from 'src/app/interfaces/user';
import { environment } from 'src/environments/environment.development';
import { FullUser } from 'src/app/interfaces/full-user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<User[]>(this.apiUrl + '/users');
  }

  getUser(id: number) {
    return this.http.get<FullUser>(this.apiUrl + '/users' + '/' + id);
  }

  put(user: FullUser) {
    return this.http.patch<AccessData>(
      this.apiUrl + '/users' + '/' + user.id,
      user
    );
  }

  delete(id: number) {
    return this.http.delete(this.apiUrl + '/users' + '/' + id);
  }
}
