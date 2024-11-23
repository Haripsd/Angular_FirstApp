import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartExForComponent } from './shopping-cart-ex-for.component';

describe('ShoppingCartExForComponent', () => {
  let component: ShoppingCartExForComponent;
  let fixture: ComponentFixture<ShoppingCartExForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingCartExForComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCartExForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
