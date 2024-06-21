/**
 * Test for isSufficientCheck function
 */
import { CameraRange, HardwareCamera, SoftwareCamera } from './camera.model';
import { CAMERAS_AVAILABLE_LIST } from './cameras';
import {
  getMatchedCameras,
  isAnyCameraMatched,
  isHardwareCameraSufficientCheck
} from './is-hardware-camera-sufficient-check';

/**
 * FOR TESTING ONLY
 * Dictionary of software Cameras Available of type SoftwareCamera
 */
const SOFTWARE_CAMERAS: { [key: string]: SoftwareCamera } = {

  // should pass test, all parameters are in range
  'Zoom': {
    softwareCamera: 'Zoom',
    distanceRange: [ 6, 8 ],
    lightLevelRange: [ 100, 400 ]
  },

  // lightLevelRange out of range, should fail sufficiency test
  'Logitech': {
    softwareCamera: 'Logitech',
    distanceRange: [ 1, 5 ],
    lightLevelRange: [ 2000, 5000 ]
  },

  // distanceRange out of range, should fail sufficiency test
  'GoogleMeet': {
    softwareCamera: 'Google Meet',
    distanceRange: [ 100, 200 ],
    lightLevelRange: [ 300, 800 ]
  },
  'Apple': {
    softwareCamera: 'Apple',
    distanceRange: [ 2, 8 ],
    lightLevelRange: [ 300, 800 ]
  }
};



describe('isHardwareCameraSufficientCheck', () => {
  it('should return false if either distance or light level are out of range', () => {

    const { distanceRange, lightLevelRange } = SOFTWARE_CAMERAS['Zoom'];

    const result = isHardwareCameraSufficientCheck(distanceRange, lightLevelRange, CAMERAS_AVAILABLE_LIST);
    expect(result).toBe(false);

    // Alternative approach
    expect(isAnyCameraMatched(distanceRange, lightLevelRange, CAMERAS_AVAILABLE_LIST)).toBe(false);
  });

  it('should return false if the light level is out of range', () => {

    const { distanceRange, lightLevelRange } = SOFTWARE_CAMERAS['Logitech'];

    const result = isHardwareCameraSufficientCheck(distanceRange, lightLevelRange, CAMERAS_AVAILABLE_LIST);
    expect(result).toBe(false);

    // Alternative approach
    expect(isAnyCameraMatched(distanceRange, lightLevelRange, CAMERAS_AVAILABLE_LIST)).toBe(false);
  });

  it('should return false if the light level is out of range', () => {

    const { distanceRange, lightLevelRange } = SOFTWARE_CAMERAS['GoogleMeet'];

    const result = isHardwareCameraSufficientCheck(distanceRange, lightLevelRange, CAMERAS_AVAILABLE_LIST);
    expect(result).toBe(false);

    // Alternative approach
    expect(isAnyCameraMatched(distanceRange, lightLevelRange, CAMERAS_AVAILABLE_LIST)).toBe(false);
  });

  it('should return true if all params in range', () => {

    const { distanceRange, lightLevelRange } = SOFTWARE_CAMERAS['Apple'];

    const result = isHardwareCameraSufficientCheck(distanceRange, lightLevelRange, CAMERAS_AVAILABLE_LIST);
    expect(result).toBe(true);

    // Alternative approach
    expect(isAnyCameraMatched(distanceRange, lightLevelRange, CAMERAS_AVAILABLE_LIST)).toBe(true);
  });

  it('should match given test set', () => {

    const distanceRange: CameraRange = [ 2, 20 ];
    const lightLevelRange: CameraRange = [ 10, 1000 ];

    const HARDWARE_CAMERA_TEST_SET: HardwareCamera[] = [
      {
        cameraBrand: 'camera1',
        cameraModel: 'Camera 1',
        distanceRange: [ 0.5, 1 ],
        lightLevelRange: [ 2, 5 ]
      },
      {
        cameraBrand: 'camera2',
        cameraModel: 'Camera 2',
        distanceRange: [ 30, 50 ],
        lightLevelRange: [ 1500, 5000 ]
      },
    ]

    const result = isHardwareCameraSufficientCheck(distanceRange, lightLevelRange, HARDWARE_CAMERA_TEST_SET);
    expect(result).toBe(false);

    // Alternative approach
    expect(isAnyCameraMatched(distanceRange, lightLevelRange, HARDWARE_CAMERA_TEST_SET)).toBe(false);
  });

});


describe('getMatchedCameras', () => {

  it('should return list of matched cameras', () => {
    const desiredDistanceRange: CameraRange = [ 2, 8 ];
    const desiredLightLevelRange: CameraRange = [ 300, 800 ];
    const result = getMatchedCameras(desiredDistanceRange, desiredLightLevelRange, CAMERAS_AVAILABLE_LIST);
    expect(result).toEqual([
      CAMERAS_AVAILABLE_LIST[2],

    ]);
  });
})
