import { Component, inject, Signal } from '@angular/core';
import {CommonModule} from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { DlcDeadlineClockComponent } from '@sixcrickets/design-library-components';
import { ApiService } from '@sixcrickets/shared-domain';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [ CommonModule, DlcDeadlineClockComponent ],
  templateUrl: './countdown-page.component.html',
  styleUrl: './countdown-page.component.scss'
})
export class CountdownPageComponent {
  private api = inject(ApiService);

  secondsLeft = <Signal<number>>toSignal(this.api.secondsToDeadline());
}
