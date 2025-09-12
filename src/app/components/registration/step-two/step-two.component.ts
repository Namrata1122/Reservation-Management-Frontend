import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent {
  @Input() model:any;
  confirmPassword:string = '';

  @Output() prev = new EventEmitter<void>();
  @Output() OnFormSubmitted = new EventEmitter<void>();
}
