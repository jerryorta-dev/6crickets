/**
 * Test for isSufficientCheck function
 */
import { CAMERAS_AVAILABLE_LIST, SOFTWARE_CAMERAS } from './cameras';
import { isHardwareCameraSufficientCheck } from './is-hardware-camera-sufficient-check';

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
