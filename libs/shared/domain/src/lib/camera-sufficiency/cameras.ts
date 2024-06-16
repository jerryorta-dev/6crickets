
/*
  * Hardware cameras.
  * https://www.adorama.com/alc/what-are-the-different-types-of-cameras-used-for-photography/
  * https://en.wikipedia.org/wiki/List_of_digital_camera_brands
 */
import { HardwareCamera, SoftwareCamera } from './camera.model';

export const CAMERAS_AVAILABLE_LIST: HardwareCamera[] = [
  {
    cameraBrand: 'Canon',
    cameraModel: 'EOS 5D Mark IV',
    distanceRange: [ 1, 5 ],
    lightLevelRange: [ 100, 500 ]
  },
  {
    cameraBrand: 'Nikon',
    cameraModel: 'D850',
    distanceRange: [ 5, 10 ],
    lightLevelRange: [ 500, 1000 ]
  },
  {
    cameraBrand: 'Sony',
    cameraModel: 'Alpha 7 III',
    distanceRange: [ 2, 8 ],
    lightLevelRange: [ 300, 800 ]
  }
];

/**
 * For Testing Only
 * Dictionary of software Cameras Available of type SoftwareCamera
 */
export const SOFTWARE_CAMERAS: { [key: string]: SoftwareCamera } = {

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

