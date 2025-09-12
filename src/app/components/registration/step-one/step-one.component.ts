import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent {
  @Input() model:any;

  @Output() next = new EventEmitter<void>();
}
