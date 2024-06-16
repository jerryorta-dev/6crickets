import { Component, input, InputSignal, ViewEncapsulation } from '@angular/core';
import {CommonModule} from '@angular/common';
import { HardwareCamera } from '@sixcrickets/shared-domain';

@Component({
  selector: 'dlc-cameras-matched',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dlc-cameras-matched.component.html',
  styleUrl: './dlc-cameras-matched.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'dlc-cameras-matched'
  }
})
export class DlcCamerasMatchedComponent {
  matchedCameras: InputSignal<HardwareCamera[]> = input(<HardwareCamera[]>[])
}
