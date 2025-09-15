import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMyReservationComponent } from './delete-my-reservation.component';

describe('DeleteMyReservationComponent', () => {
  let component: DeleteMyReservationComponent;
  let fixture: ComponentFixture<DeleteMyReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteMyReservationComponent]
    });
    fixture = TestBed.createComponent(DeleteMyReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
