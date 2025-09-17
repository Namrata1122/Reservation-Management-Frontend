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

  dashboardService:DashboardService = inject(DashboardService);
  userDashboardService:UserDashboardService = inject(UserDashboardService);

  private subscription!: Subscription;

  ngOnInit(): void {
    this.loadReservations();
    this.subscription = this.userDashboardService.callLoadResource$.subscribe(()=>{
      this.loadReservations();
    })
    console.log(this.subscription);
  }

  loadReservations(){
    this.dashboardService.GetMyReservations().subscribe(data=>{
      console.log(data);
      this.myReservations = data.reservation;
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
