import { Component, EventEmitter, inject, Input, Output, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { DashboardService } from '../../dashboard.service';
import { UserDashboardService } from '../user-dashboard.service';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.scss']
})
export class CreateReservationComponent {
  @Input() resource:any;

  makeReservationForm: NgForm;

  @Output()
  closeForm:EventEmitter<boolean> = new EventEmitter<boolean>();

  reservationDetails ={
    user:'',
    resource:'',
    startTime:'',
    endTime:''
  }

  authService:AuthService = inject(AuthService);
  dashboardService:DashboardService = inject(DashboardService);
  userDashboardService: UserDashboardService = inject(UserDashboardService);

  userid = (this.authService.getUserFromToken()).id;

  OnCloseForm(){
    this.closeForm.emit(false);
  }

  OnFormSubmitted(form:NgForm){
    this.makeReservationForm = form;
    this.reservationDetails={
      user:this.userid,
      resource:this.resource._id,
      startTime:this.makeReservationForm.value.startTime,
      endTime:this.makeReservationForm.value.endTime
    }
    this.dashboardService.CreateReservation(this.reservationDetails).subscribe({
      next:(response)=>{
        alert(`You have reserved ${this.resource.name} 
          from ${this.reservationDetails.startTime} to ${this.reservationDetails.endTime}`);
        this.userDashboardService.callLoadReservations();
        console.log(response);
      },
      error:(err)=>{
        alert(`Could not make the reservation!`);
        console.log(err);
      }
    })
  }
}
