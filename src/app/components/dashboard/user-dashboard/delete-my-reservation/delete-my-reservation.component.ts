import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserDashboardService } from '../user-dashboard.service';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-delete-my-reservation',
  templateUrl: './delete-my-reservation.component.html',
  styleUrls: ['./delete-my-reservation.component.scss']
})
export class DeleteMyReservationComponent implements OnInit, OnDestroy{
  reservationId: any;
  private subscription!: Subscription;
  showForm: boolean; 

  userDashboardService: UserDashboardService = inject(UserDashboardService);
  dashboardService: DashboardService = inject(DashboardService);

  ngOnInit(): void {
    this.subscription = this.userDashboardService.setReservationId$.subscribe((Id)=>{
      if(Id){
        this.reservationId = Id;
      }
    })
  }

  CancelReservation(){
    this.dashboardService.CancelReservation(this.reservationId).subscribe((response)=>{
      console.log(response);
    })
    this.userDashboardService.callLoadReservations();
    this.showForm = false;
  }

  KeepReservation(){
    this.showForm = false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
