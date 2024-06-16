import { Component, inject, ViewEncapsulation } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'dlc-camera-match',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSliderModule
  ],
  templateUrl: './camera-match.component.html',
  styleUrl: './camera-match.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'dlc-camera-match'
  }
})
export class CameraMatchComponent {
  private fb = inject(FormBuilder);

  cameraMatchForm = this.fb.group({
    cameraMake: [''],
    cameraModel: ['']
  });

}
