import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos.service';
import { Photos } from './photos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'esercizio';

  constructor(private photosSvc: PhotosService) {}

  photosArr: Photos[] = [];
  likedArr: Photos[] = [];

  ngOnInit(): void {
    this.photosSvc.get().subscribe((res) => {
      this.photosArr = res;
    });
  }

  deletePhoto(id: number): void {
    this.photosSvc.delete(id).subscribe((res) => {
      console.log(id);
    });
    this.photosSvc.get().subscribe((res) => {
      this.photosArr = res;
    });
  }

  likePhoto(id: any): void {
    if (this.likedArr.includes(id)) {
      console.log('Questa foto ti piace già');
    } else {
      this.likedArr.push(id);
      console.log(this.likedArr);
    }
  }
}
