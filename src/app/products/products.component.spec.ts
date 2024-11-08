import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser'; // To query DOM elements
import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  const mockProducts = [
    { name: 'Product A', price: '$200.00', rating: 4, size: 'M' },
    { name: 'Product B', price: '$100.00', rating: 5, size: 'L' },
    { name: 'Product C', price: '$150.00', rating: 3, size: 'M' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;

    component.productList = [...mockProducts];
    component.sortedProducts = [...mockProducts];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sort products by price ascending', () => {
    component.onSortChange({ target: { value: 'priceAsc' } } as any);

    expect(component.sortedProducts[0].name).toBe('Product B');
  });

  it('should sort products by price descending', () => {
    component.onSortChange({ target: { value: 'priceDesc' } } as any);

    expect(component.sortedProducts[0].name).toBe('Product A');
  });

  it('should sort products by rating', () => {
    component.onSortChange({ target: { value: 'rating' } } as any);

    expect(component.sortedProducts[0].name).toBe('Product B');
  });

  it('should not change the order when sorting by relevant', () => {
    component.onSortChange({ target: { value: 'relevant' } } as any);

    expect(component.sortedProducts[0].name).toBe('Product A');
    expect(component.sortedProducts[1].name).toBe('Product B');
    expect(component.sortedProducts[2].name).toBe('Product C');
  });

  it('should filter products by selected size', () => {
    component.selectedSize = 'M';
    component.onSizeChange({ target: { value: 'M' } } as any);

    expect(component.sortedProducts.length).toBe(2);
    expect(component.sortedProducts[0].name).toBe('Product A');
    expect(component.sortedProducts[1].name).toBe('Product C');
  });

  it('should return unique sizes', () => {
    const uniqueSizes = component.getUniqueSizes();
    expect(uniqueSizes).toEqual(['M', 'L']);
  });

  it('should return an array of full stars based on rating', () => {
    const stars = component.getFullStars(4.5);
    expect(stars.length).toBe(4);
  });


  it('should toggle layout from grid view to list view', () => {
    const toggleButton = fixture.debugElement.query(By.css('.view-toggle-btn'));
    toggleButton.triggerEventHandler('click', null);

    fixture.detectChanges();

    expect(component.isGridView).toBe(false);

    const buttonText = toggleButton.nativeElement.querySelector('span');
    const iconClass = toggleButton.nativeElement.querySelector('i').classList;

    expect(buttonText.textContent).toBe('List View');
    expect(iconClass.contains('fa-list')).toBe(true);
  });

  it('should toggle layout from list view to grid view', () => {
    component.isGridView = false;
    fixture.detectChanges();

    const toggleButton = fixture.debugElement.query(By.css('.view-toggle-btn'));
    toggleButton.triggerEventHandler('click', null);

    fixture.detectChanges();

    expect(component.isGridView).toBe(true);

    const buttonText = toggleButton.nativeElement.querySelector('span');
    const iconClass = toggleButton.nativeElement.querySelector('i').classList;

    expect(buttonText.textContent).toBe('Grid View');
    expect(iconClass.contains('fa-th-large')).toBe(true);
  });
});
