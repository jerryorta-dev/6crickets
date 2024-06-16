/**
 * Test for isSufficientCheck function
 */
import { SoftwareCamera } from './camera.model';
import { CAMERAS_AVAILABLE_LIST } from './cameras';
import { isHardwareCameraSufficientCheck } from './is-hardware-camera-sufficient-check';

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



describe('isSufficientCheck', () => {
  it('should return true if the coverage is sufficient', () => {

    const { distanceRange, lightLevelRange } = SOFTWARE_CAMERAS['Zoom'];

    const result = isHardwareCameraSufficientCheck(distanceRange, lightLevelRange, CAMERAS_AVAILABLE_LIST);
    expect(result).toBe(true);
  });

  it('should return false if the light level is out of range', () => {

    const { distanceRange, lightLevelRange } = SOFTWARE_CAMERAS['Logitech'];

    const result = isHardwareCameraSufficientCheck(distanceRange, lightLevelRange, CAMERAS_AVAILABLE_LIST);
    expect(result).toBe(false);
  });

  it('should return false if the light level is out of range', () => {

    const { distanceRange, lightLevelRange } = SOFTWARE_CAMERAS['GoogleMeet'];

    const result = isHardwareCameraSufficientCheck(distanceRange, lightLevelRange, CAMERAS_AVAILABLE_LIST);
    expect(result).toBe(false);
  });

  it('should return true if all params in range', () => {

    const { distanceRange, lightLevelRange } = SOFTWARE_CAMERAS['Apple'];

    const result = isHardwareCameraSufficientCheck(distanceRange, lightLevelRange, CAMERAS_AVAILABLE_LIST);
    expect(result).toBe(true);
  });

});
