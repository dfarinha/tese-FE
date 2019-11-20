import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckSerialComponent } from './check-serial.component';

describe('CheckSerialComponent', () => {
  let component: CheckSerialComponent;
  let fixture: ComponentFixture<CheckSerialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckSerialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckSerialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
