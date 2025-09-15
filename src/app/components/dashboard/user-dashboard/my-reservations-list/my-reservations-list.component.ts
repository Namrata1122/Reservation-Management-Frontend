import { Component, inject, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-my-reservations-list',
  templateUrl: './my-reservations-list.component.html',
  styleUrls: ['./my-reservations-list.component.scss']
})
export class MyReservationsListComponent implements OnInit{
  myReservations:any[] = [];

  dashboardService:DashboardService = inject(DashboardService);

  ngOnInit(): void {
    this.dashboardService.GetMyReservations().subscribe(data=>{
      console.log(data);
      this.myReservations = data.reservation;
      console.log(this.myReservations)
    })
  }
}
