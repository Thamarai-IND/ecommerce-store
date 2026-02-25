import { ComponentFixture, TestBed } from '@angular/core/testing';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
