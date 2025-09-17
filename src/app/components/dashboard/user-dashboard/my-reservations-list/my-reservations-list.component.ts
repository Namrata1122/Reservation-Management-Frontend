import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { UserDashboardService } from '../user-dashboard.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-reservations-list',
  templateUrl: './my-reservations-list.component.html',
  styleUrls: ['./my-reservations-list.component.scss']
})
export class MyReservationsListComponent implements OnInit, OnDestroy{
  myReservations:any[] = [];
  showcancelreservationform:boolean = false;
  selectedReservation:any;

  dashboardService:DashboardService = inject(DashboardService);
  userDashboardService:UserDashboardService = inject(UserDashboardService);

  private subscription!: Subscription;

  ngOnInit(): void {
    this.loadReservations();
    this.subscription = this.userDashboardService.callLoadReservations$.subscribe(()=>{
      this.loadReservations();
    })
  }

  loadReservations(){
    this.dashboardService.GetMyReservations().subscribe(data=>{
      this.myReservations = data.reservation;
    })
  }

  OnCancelClicked(reservation:any){
    this.userDashboardService.setReservationId(reservation._id);
    this.selectedReservation = reservation;
    this.showcancelreservationform=true;
  }

  

  OnRescheduleClicked(){
    
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
