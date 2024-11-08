import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../shared/item.service';

export interface Post {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private http: HttpClient, private itemService: ItemService) {}

  ngOnInit() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data) => {
        this.posts = data;
      });
  }

  removePost(post: any) {
    this.posts = this.posts.filter(p => p.id !== post.id);
    this.itemService.addRemovedPost(post); // Add to the service
  }
}
