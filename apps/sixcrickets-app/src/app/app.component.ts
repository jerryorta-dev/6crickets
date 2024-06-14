import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DeadlineClockComponent } from './deadline-clock/deadline-clock.component';

@Component({
  standalone: true,
  imports: [ RouterModule, DeadlineClockComponent ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
