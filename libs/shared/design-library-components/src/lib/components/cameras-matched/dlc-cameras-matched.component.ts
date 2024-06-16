import { Component, input, InputSignal } from '@angular/core';
import {CommonModule} from '@angular/common';
import { HardwareCamera } from '@sixcrickets/shared-domain';

@Component({
  selector: 'dlc-cameras-matched',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dlc-cameras-matched.component.html',
  styleUrl: './dlc-cameras-matched.component.scss'
})
export class DlcCamerasMatchedComponent {
  matchedCameras: InputSignal<HardwareCamera[]> = input(<HardwareCamera[]>[])
}
