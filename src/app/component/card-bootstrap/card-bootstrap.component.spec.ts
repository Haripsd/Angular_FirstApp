import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBootstrapComponent } from './card-bootstrap.component';

describe('CardBootstrapComponent', () => {
  let component: CardBootstrapComponent;
  let fixture: ComponentFixture<CardBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardBootstrapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
