import { TestBed } from '@angular/core/testing';
import { CameraRangeSpec, HardwareCamera } from './camera.model';

import { CameraMatchService } from './camera-match.service';
import { CAMERAS_AVAILABLE_LIST } from './cameras';

describe('CameraMatchService', () => {
  let service: CameraMatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CameraMatchService);
  });

  it('should match cameras', () => {

    const rangeSpec: CameraRangeSpec = {
      distanceRange: [5, 8],
      lightLevelRange: [540, 860]
    }

    service.matchCameras(rangeSpec);

    const matchedCameras: HardwareCamera[] = [
      CAMERAS_AVAILABLE_LIST[1],
      CAMERAS_AVAILABLE_LIST[4],
      CAMERAS_AVAILABLE_LIST[9],
    ]

    expect(service.isCameraMatched()).toBeTruthy();
    expect(service.matchedCameras()).toEqual(matchedCameras);
  });

  it('should not match cameras', () => {

    const rangeSpec: CameraRangeSpec = {
      distanceRange: [10, 20],
      lightLevelRange: [0, 50]
    }

    service.matchCameras(rangeSpec);

    const matchedCameras: HardwareCamera[] = [];

    expect(service.isCameraMatched()).toBeFalsy();
    expect(service.matchedCameras()).toEqual(matchedCameras);
  });
});
