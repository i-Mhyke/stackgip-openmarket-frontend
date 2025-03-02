import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeliveryStatusComponent } from './update-delivery-status.component';

describe('UpdateDeliveryStatusComponent', () => {
  let component: UpdateDeliveryStatusComponent;
  let fixture: ComponentFixture<UpdateDeliveryStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDeliveryStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDeliveryStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
