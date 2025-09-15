import { Component, EventEmitter, inject, Input, Output, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.scss']
})
export class CreateReservationComponent {
  @Input() resource:any;

  @ViewChild('reservationform') reservationForm: NgForm;

  @Output()
  closeForm:EventEmitter<boolean> = new EventEmitter<boolean>();

  reservationDetails ={
    userId:'',
    resourceId:'',
    startTime:'',
    endTime:''
  }

  authService:AuthService = inject(AuthService);

  userid = (this.authService.getUserFromToken()).id;

  OnCloseForm(){
    this.closeForm.emit(false);
  }

  OnFormSubmitted(reservationform:NgForm){
    
  }

  ngAfterViewInit(){
    this.reservationForm.form.patchValue(this.resource);
  }
}
