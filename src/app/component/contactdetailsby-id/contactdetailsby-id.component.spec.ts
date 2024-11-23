import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactdetailsbyIdComponent } from './contactdetailsby-id.component';

describe('ContactdetailsbyIdComponent', () => {
  let component: ContactdetailsbyIdComponent;
  let fixture: ComponentFixture<ContactdetailsbyIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactdetailsbyIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactdetailsbyIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
