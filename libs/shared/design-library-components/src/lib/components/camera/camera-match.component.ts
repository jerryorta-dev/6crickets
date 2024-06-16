import { CommonModule } from '@angular/common';
import { Component, OnInit, output, OutputEmitterRef, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { CameraRangeSpec } from '@sixcrickets/shared-domain';

@Component({
  selector: 'dlc-camera-match-input',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSliderModule,
    FormsModule
  ],
  templateUrl: './camera-match.component.html',
  styleUrl: './camera-match.component.scss',
  // Allow component to more easily be styled by parent components
  // in applications
  encapsulation: ViewEncapsulation.None,

  // Not really "style guide" compliant,
  // but Google development teams ( Angular Material )
  // use this. Could use @Hostbinding instead.
  host: {
    class: 'dlc-camera-match-input'
  }
})
export class CameraMatchComponent implements OnInit {

  lowerDistance = 5;
  upperDistance = 8;

  lowerLightLevel = 540;
  upperLightLevel = 860;

  selectedCameraRangeRange: OutputEmitterRef<CameraRangeSpec> = output()

  get rangeSpec(): CameraRangeSpec {
    return {
      distanceRange: [this.lowerDistance, this.upperDistance],
      lightLevelRange: [this.lowerLightLevel, this.upperLightLevel]
    };

  }

  ngOnInit() {
    this.selectedCameraRangeRange.emit(this.rangeSpec);
  }
}
