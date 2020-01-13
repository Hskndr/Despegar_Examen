import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDeliveryComponent } from './menu-delivery.component';

describe('MenuDeliveryComponent', () => {
  let component: MenuDeliveryComponent;
  let fixture: ComponentFixture<MenuDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
