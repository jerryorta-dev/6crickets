import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import { CameraMatchComponent } from '@sixcrickets/design-library-components';

@Component({
  selector: 'app-camera-page',
  standalone: true,
  imports: [ CommonModule, CameraMatchComponent ],
  templateUrl: './camera-page.component.html',
  styleUrl: './camera-page.component.scss'
})
export class CameraPageComponent {}
