import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../shared/item.service';

export interface Photo {
  albumId?: number;
  id?: number;
  title?: string;
  url?: string;
  thumbnailUrl?: string;
}

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnInit {
  photos: Photo[] = [];

  constructor(private http: HttpClient, private itemService: ItemService) {}

  ngOnInit() {
    this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos')
      .subscribe((data) => {
        this.photos = data;
      });
  }

  removePhoto(photo: Photo) {
    this.photos = this.photos.filter(p => p.id !== photo.id);
    this.itemService.addRemovedPhoto(photo); // Add to the service
  }
}
