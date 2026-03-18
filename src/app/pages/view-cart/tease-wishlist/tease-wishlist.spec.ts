import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TeaseWishlist } from './tease-wishlist';

describe('TeaseWishlist', () => {
  let component: TeaseWishlist;
  let fixture: ComponentFixture<TeaseWishlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeaseWishlist, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeaseWishlist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
