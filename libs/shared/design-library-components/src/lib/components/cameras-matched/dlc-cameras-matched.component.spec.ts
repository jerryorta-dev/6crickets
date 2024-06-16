import { signal } from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import { HardwareCamera } from '@sixcrickets/shared-domain';
import { CAMERAS_AVAILABLE_LIST } from '../../../../../domain/src/lib/camera-sufficiency/cameras';
import {DlcCamerasMatchedComponent} from './dlc-cameras-matched.component';

describe('DlcCamerasMatchedComponent', () => {
  let component: DlcCamerasMatchedComponent;
  let fixture: ComponentFixture<DlcCamerasMatchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DlcCamerasMatchedComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DlcCamerasMatchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initiate with not matched cameras', () => {
    expect(component.matchedCameras()).toEqual([]);
  });

  it('receive HardwareCamera[] input', () => {
    const matchedCameras = signal([
      CAMERAS_AVAILABLE_LIST[0],
      CAMERAS_AVAILABLE_LIST[1]
    ]);
    component.matchedCameras = matchedCameras as unknown as typeof component.matchedCameras;

    fixture.detectChanges();

    expect(component.matchedCameras()).toEqual(matchedCameras());
  });
});
