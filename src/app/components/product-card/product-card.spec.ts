import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCard } from './product-card';

describe('ProductCard', () => {
  let component: ProductCard;
  let fixture: ComponentFixture<ProductCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCard);
    component = fixture.componentInstance;
    // Provide a minimal Product input as a signal-like function because
    // the component expects `product` to be a signal (callable) via
    // `input.required()` API.
    const mockProduct = {
      id: 'test',
      name: 'Test Product',
      description: 'A product used in tests',
      price: 1,
      imageUrl: '',
      images: [],
      rating: 0,
      reviewCount: 0,
      inStock: true,
      category: 'test',
    };
    (component as any).product = (() => mockProduct) as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
