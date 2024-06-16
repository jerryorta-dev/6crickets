import { CommonModule } from '@angular/common';
import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dlc-deadline-clock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deadline-clock.component.html',
  styleUrl: './deadline-clock.component.scss',

  // Allow component to more easily be styled by parent components
  // in applications
  encapsulation: ViewEncapsulation.None,

  // Not really "style guide" compliant,
  // but Google development teams ( Angular Material )
  // use this. Could use @Hostbinding instead.
  host: {
    class: 'dlc-deadline-clock',
  },
})
export class DeadlineClockComponent {
  secondsLeft = input(0);
}
