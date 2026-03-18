import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ShowCartItems } from './show-cart-items';

describe('ShowCartItems', () => {
  let component: ShowCartItems;
  let fixture: ComponentFixture<ShowCartItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowCartItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCartItems);
    component = fixture.componentInstance;
    // Provide a minimal CartItem input as a callable (signal-like) because the
    // component uses `input.required()` and expects a function to read the value.
    (component as any).item = (() => ({
      product: {
        id: 'p1',
        name: 'P',
        description: 'd',
        price: 1,
        imageUrl: '',
        images: [],
        rating: 0,
        reviewCount: 0,
        inStock: true,
        category: 'test'
      },
      quantity: 1
    })) as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
