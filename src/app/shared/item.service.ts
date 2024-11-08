import { Injectable } from '@angular/core';
import { Photo } from '../dashboard/photos/photos.component';
import { Post } from '../dashboard/posts/posts.component';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private removedPhotos: Photo[] = [];
  private removedPosts: Post[] = [];

  constructor() {}

  addRemovedPhoto(photo: Photo) {
    this.removedPhotos.push(photo);
  }

  addRemovedPost(post: Post) {
    this.removedPosts.push(post);
  }

  getRemovedPhotos(): Photo[] {
    return this.removedPhotos;
  }

  getRemovedPosts(): Post[] {
    return this.removedPosts;
  }
}
