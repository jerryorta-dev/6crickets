import { Component, ViewEncapsulation } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'dlc-camera-match',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './camera-match.component.html',
  styleUrl: './camera-match.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'dlc-camera-match'
  }
})
export class CameraMatchComponent {}
