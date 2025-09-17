import { Component, inject, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-user-reservations-list',
  templateUrl: './user-reservations-list.component.html',
  styleUrls: ['./user-reservations-list.component.scss']
})
export class UserReservationsListComponent implements OnInit{
  reservations:any[]=[]

  dashboardService :DashboardService = inject(DashboardService);

  ngOnInit(){
    this.dashboardService.GetAllReservations().subscribe((data)=>{
      this.reservations = data.reservation;
      console.log(this.reservations)
      this.reservations = this.reservations.filter(reservation => reservation.resource !== null);
      console.log(this.reservations)
    })
  }
}
