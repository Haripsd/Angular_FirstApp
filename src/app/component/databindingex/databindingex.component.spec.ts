import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingexComponent } from './databindingex.component';

describe('DatabindingexComponent', () => {
  let component: DatabindingexComponent;
  let fixture: ComponentFixture<DatabindingexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatabindingexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabindingexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
