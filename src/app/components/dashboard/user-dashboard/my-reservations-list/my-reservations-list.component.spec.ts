import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReservationsListComponent } from './my-reservations-list.component';

describe('MyReservationsListComponent', () => {
  let component: MyReservationsListComponent;
  let fixture: ComponentFixture<MyReservationsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyReservationsListComponent]
    });
    fixture = TestBed.createComponent(MyReservationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
