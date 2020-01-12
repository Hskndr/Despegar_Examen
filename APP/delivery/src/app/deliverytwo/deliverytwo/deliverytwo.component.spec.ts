import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverytwoComponent } from './deliverytwo.component';

describe('DeliverytwoComponent', () => {
  let component: DeliverytwoComponent;
  let fixture: ComponentFixture<DeliverytwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverytwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverytwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
