import { TestBed } from '@angular/core/testing';
import { Photo } from '../dashboard/photos/photos.component';
import { Post } from '../dashboard/posts/posts.component';
import { ItemService } from './item.service';

describe('ItemService', () => {
  let service: ItemService;


  const mockPost: Post = {
    userId: 1,
    id: 101,
    title: 'Sample Post',
    body: 'This is a sample post for testing.',
  };

  const mockPhoto: Photo = {
    id: 1,
    title: 'Sample Photo',
    url: 'https://example.com/photo.jpg',
    thumbnailUrl: 'https://example.com/photo-thumbnail.jpg',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemService],
    });
    service = TestBed.inject(ItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add removed post correctly', () => {
    service.addRemovedPost(mockPost);
    const removedPosts = service.getRemovedPosts();
    expect(removedPosts.length).toBe(1);
    expect(removedPosts[0]).toEqual(mockPost);
  });

  it('should add removed photo correctly', () => {
    service.addRemovedPhoto(mockPhoto);
    const removedPhotos = service.getRemovedPhotos();
    expect(removedPhotos.length).toBe(1);
    expect(removedPhotos[0]).toEqual(mockPhoto);
  });

  it('should return empty array for removed posts initially', () => {
    const removedPosts = service.getRemovedPosts();
    expect(removedPosts.length).toBe(0);
  });

  it('should return empty array for removed photos initially', () => {
    const removedPhotos = service.getRemovedPhotos();
    expect(removedPhotos.length).toBe(0);
  });
});
