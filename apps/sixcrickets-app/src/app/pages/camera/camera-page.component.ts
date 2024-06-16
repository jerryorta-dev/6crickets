import { Component, inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import { CameraMatchComponent, DlcCamerasMatchedComponent } from '@sixcrickets/design-library-components';
import { CameraMatchService } from '@sixcrickets/shared-domain';

@Component({
  selector: 'app-camera-page',
  standalone: true,
  imports: [ CommonModule, CameraMatchComponent, DlcCamerasMatchedComponent ],
  templateUrl: './camera-page.component.html',
  styleUrl: './camera-page.component.scss'
})
export class CameraPageComponent {
  cameraMatchService: CameraMatchService = inject(CameraMatchService);
}
