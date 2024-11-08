import { Component } from '@angular/core';
import { ItemService } from '../../shared/item.service';
import { Photo } from '../photos/photos.component';
import { Post } from '../posts/posts.component';

@Component({
  selector: 'app-removed-items',
  templateUrl: './removed-items.component.html',
  styleUrls: ['./removed-items.component.scss'],
})
export class RemovedItemsComponent {
  get removedPhotos(): Photo[] {
    return this.itemService.getRemovedPhotos() ?? [];
  }

  get removedPosts(): Post[] {
    return this.itemService.getRemovedPosts() ?? [];
  }

  constructor(private itemService: ItemService) {}
}
