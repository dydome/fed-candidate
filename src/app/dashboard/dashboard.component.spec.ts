import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { PhotosComponent } from './photos/photos.component';
import { PostsComponent } from './posts/posts.component';
import { RemovedItemsComponent } from './removed-items/removed-items.component';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent, PostsComponent, PhotosComponent, RemovedItemsComponent],
      imports: [HttpClientTestingModule], // Add HttpClientTestingModule to provide HttpClient
      schemas: [NO_ERRORS_SCHEMA], // Ignore unknown child components' errors
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger change detection
  });

  it('should create the dashboard component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the dashboard header', () => {
    const headerElement: HTMLElement = fixture.nativeElement;
    const h1 = headerElement.querySelector('h1');
    expect(h1?.textContent).toBe('Dashboard');
  });

  it('should render child components', () => {
    const postsComponent = fixture.nativeElement.querySelector('app-posts');
    const photosComponent = fixture.nativeElement.querySelector('app-photos');
    const removedItemsComponent = fixture.nativeElement.querySelector('app-removed-items');

    expect(postsComponent).toBeTruthy();
    expect(photosComponent).toBeTruthy();
    expect(removedItemsComponent).toBeTruthy();
  });
});
