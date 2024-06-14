import { Component, Signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-deadline-clock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deadline-clock.component.html',
  styleUrl: './deadline-clock.component.scss',
})
export class DeadlineClockComponent {
  private api = inject(ApiService);

  secondsLeft = <Signal<number>>toSignal(this.api.secondsToDeadline());


}
