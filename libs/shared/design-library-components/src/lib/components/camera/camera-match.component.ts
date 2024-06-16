import { CommonModule } from '@angular/common';
import { Component, OnInit, output, OutputEmitterRef, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { CameraRangeSpec } from '@sixcrickets/shared-domain';

@Component({
  selector: 'dlc-camera-match',
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
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'dlc-camera-match'
  }
})
export class CameraMatchComponent implements OnInit {

  lowerDistance = 2;
  upperDistance = 8;

  lowerLightLevel = 100;
  upperLightLevel = 500;

  selectedRange: OutputEmitterRef<CameraRangeSpec> = output()

  get rangeSpec(): CameraRangeSpec {
    return {
      distanceRange: [this.lowerDistance, this.upperDistance],
      lightLevelRange: [this.lowerLightLevel, this.upperLightLevel]
    };

  }

  ngOnInit() {
    this.selectedRange.emit(this.rangeSpec);
  }
}
