import { Component, input, InputSignal, ViewEncapsulation } from '@angular/core';
import {CommonModule} from '@angular/common';
import { HardwareCamera } from '@sixcrickets/shared-domain';

@Component({
  selector: 'dlc-cameras-matched',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dlc-cameras-matched.component.html',
  styleUrl: './dlc-cameras-matched.component.scss',
  // Allow component to more easily be styled by parent components
  // in applications
  encapsulation: ViewEncapsulation.None,

  // Not really "style guide" compliant,
  // but Google development teams ( Angular Material )
  // use this. Could use @Hostbinding instead.
  host: {
    class: 'dlc-cameras-matched'
  }
})
export class DlcCamerasMatchedComponent {
  matchedCameras: InputSignal<HardwareCamera[]> = input(<HardwareCamera[]>[])
}
