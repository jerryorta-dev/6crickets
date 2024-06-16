import { Component, inject, Signal } from '@angular/core';
import {CommonModule} from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { DeadlineClockComponent } from '@sixcrickets/design-library-components';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [ CommonModule, DeadlineClockComponent ],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent {
  private api = inject(ApiService);

  secondsLeft = <Signal<number>>toSignal(this.api.secondsToDeadline());
}
