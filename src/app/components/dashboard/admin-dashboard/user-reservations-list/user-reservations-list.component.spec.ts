import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReservationsListComponent } from './user-reservations-list.component';

describe('UserReservationsListComponent', () => {
  let component: UserReservationsListComponent;
  let fixture: ComponentFixture<UserReservationsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserReservationsListComponent]
    });
    fixture = TestBed.createComponent(UserReservationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
