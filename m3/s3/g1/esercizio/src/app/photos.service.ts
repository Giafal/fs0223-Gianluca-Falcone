import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photos } from './photos';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  apiUrl: string = 'http://localhost:3000/photos';

  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Photos[]>(this.apiUrl);
  }

  delete(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
