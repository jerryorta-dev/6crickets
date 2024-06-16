/*
  * Hardware cameras.
  * https://www.adorama.com/alc/what-are-the-different-types-of-cameras-used-for-photography/
  * https://en.wikipedia.org/wiki/List_of_digital_camera_brands
 */
import { HardwareCamera } from './camera.model';

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

