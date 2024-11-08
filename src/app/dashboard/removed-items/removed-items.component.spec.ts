import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ItemService } from '../../shared/item.service';
import { Photo } from '../photos/photos.component';
import { Post } from '../posts/posts.component';
import { RemovedItemsComponent } from './removed-items.component';

describe('RemovedItemsComponent', () => {
  let component: RemovedItemsComponent;
  let fixture: ComponentFixture<RemovedItemsComponent>;
  let itemServiceSpy: jasmine.SpyObj<ItemService>;

  const mockPhotos: Photo[] = [
    { id: 1, title: 'Photo 1', url: 'http://placehold.co/150x150' },
    { id: 2, title: 'Photo 2', url: 'http://placehold.co/150x150' },
  ];

  const mockPosts: Post[] = [
    { id: 1, title: 'Post 1', body: 'Body of post 1' },
    { id: 2, title: 'Post 2', body: 'Body of post 2' },
  ];

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('ItemService', [
      'getRemovedPhotos',
      'getRemovedPosts'
    ]);

    await TestBed.configureTestingModule({
      declarations: [RemovedItemsComponent],
      providers: [{ provide: ItemService, useValue: spy }],
    }).compileComponents();

    fixture = TestBed.createComponent(RemovedItemsComponent);
    component = fixture.componentInstance;
    itemServiceSpy = TestBed.inject(ItemService) as jasmine.SpyObj<ItemService>;

    itemServiceSpy.getRemovedPhotos.and.returnValue(mockPhotos);
    itemServiceSpy.getRemovedPosts.and.returnValue(mockPosts);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display removed photos', () => {
    fixture.detectChanges();

    const photoItems: DebugElement[] = fixture.debugElement.queryAll(By.css('.photo-item'));
    expect(photoItems.length).toBe(mockPhotos.length);
    expect(photoItems[0].nativeElement.textContent).toContain(mockPhotos[0].title);
    expect(photoItems[1].nativeElement.textContent).toContain(mockPhotos[1].title);
  });

  it('should display removed posts', () => {
    fixture.detectChanges();

    const postItems: DebugElement[] = fixture.debugElement.queryAll(By.css('ul:nth-of-type(2) li'));
    expect(postItems.length).toBe(mockPosts.length);
    expect(postItems[0].nativeElement.textContent).toContain(mockPosts[0].title);
    expect(postItems[0].nativeElement.textContent).toContain(mockPosts[0].body);
    expect(postItems[1].nativeElement.textContent).toContain(mockPosts[1].title);
    expect(postItems[1].nativeElement.textContent).toContain(mockPosts[1].body);
  });

  it('should display message when no removed photos', () => {
    itemServiceSpy.getRemovedPhotos.and.returnValue([]);
    fixture.detectChanges();

    const noPhotosMessage = fixture.debugElement.query(By.css('#no-removed-photos p')).nativeElement;
    expect(noPhotosMessage.textContent).toContain('No photos removed yet.');
  });

  it('should display message when no removed posts', () => {
    itemServiceSpy.getRemovedPosts.and.returnValue([]);
    fixture.detectChanges();

    const noPostsMessage = fixture.debugElement.query(By.css('#no-removed-posts p')).nativeElement;
    expect(noPostsMessage.textContent).toContain('No posts removed yet.');
  });
});
