import { Injectable, signal, WritableSignal } from '@angular/core';
import { getMatchedCameras, isHardwareCameraSufficientCheck } from './is-hardware-camera-sufficient-check';
import { CameraRangeSpec, HardwareCamera } from './camera.model';
import { CAMERAS_AVAILABLE_LIST } from './cameras';

@Injectable({
  providedIn: 'root'
})
export class CameraMatchService {

  matchedCameras: WritableSignal<HardwareCamera[]> = signal([]);
  isCameraMatched: WritableSignal<boolean> = signal(false);

  matchCameras(camera: CameraRangeSpec): void {
    this.isCameraMatched.set(isHardwareCameraSufficientCheck(camera.distanceRange, camera.lightLevelRange, CAMERAS_AVAILABLE_LIST))
    this.matchedCameras.set(getMatchedCameras(camera.distanceRange, camera.lightLevelRange, CAMERAS_AVAILABLE_LIST));
  }
}
