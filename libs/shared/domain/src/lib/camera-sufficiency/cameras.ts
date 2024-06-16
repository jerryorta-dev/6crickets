/*
  * Hardware cameras.
  * https://www.adorama.com/alc/what-are-the-different-types-of-cameras-used-for-photography/
  * https://en.wikipedia.org/wiki/List_of_digital_camera_brands
 */
import { HardwareCamera } from './camera.model';

/**
 * List of hardware cameras available.
 * The distance range is in meters from 0 to 10
 * The light level range is in lux from 0 to 1000.
 */
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
  },
  {
    cameraBrand: 'Panasonic',
    cameraModel: 'Lumix GH5',
    distanceRange: [ 3, 7 ],
    lightLevelRange: [ 200, 700 ]
  },
  {
    cameraBrand: 'Fujifilm',
    cameraModel: 'X-T4',
    distanceRange: [ 4, 9 ],
    lightLevelRange: [ 400, 900 ]
  },
  {
    cameraBrand: 'Leica',
    cameraModel: 'M10-R',
    distanceRange: [ 0, 4 ],
    lightLevelRange: [ 0, 400 ]
  },
  {
    cameraBrand: 'Olympus',
    cameraModel: 'OM-D E-M1 Mark III',
    distanceRange: [ 1, 6 ],
    lightLevelRange: [ 100, 600 ]
  },
  {
    cameraBrand: 'Hasselblad',
    cameraModel: 'X1D II 50C',
    distanceRange: [ 2, 7 ],
    lightLevelRange: [ 200, 700 ]
  },
  {
    cameraBrand: 'Pentax',
    cameraModel: 'K-1 Mark II',
    distanceRange: [ 3, 8 ],
    lightLevelRange: [ 300, 800 ]
  },
  {
    cameraBrand: 'Sigma',
    cameraModel: 'fp',
    distanceRange: [ 4, 9 ],
    lightLevelRange: [ 400, 900 ]
  },
  {
    cameraBrand: 'Hasselblad',
    cameraModel: 'X1D II 50C',
    distanceRange: [ 2, 7 ],
    lightLevelRange: [ 200, 700 ]
  },
  {
    cameraBrand: 'Pentax',
    cameraModel: 'K-1 Mark II',
    distanceRange: [ 3, 8 ],
    lightLevelRange: [ 300, 800 ]
  },
  {
    cameraBrand: 'Sigma',
    cameraModel: 'fp',
    distanceRange: [ 4, 9 ],
    lightLevelRange: [ 400, 900 ]
  },
  {
    cameraBrand: 'Hasselblad',
    cameraModel: 'X1D II 50C',
    distanceRange: [ 2, 7 ],
    lightLevelRange: [ 200, 700 ]
  },
  {
    cameraBrand: 'Pentax',
    cameraModel: 'K-1 Mark II',
    distanceRange: [ 3, 8 ],
    lightLevelRange: [ 300, 800 ]
  },
  {
    cameraBrand: 'Sigma',
    cameraModel: 'fp',
    distanceRange: [ 4, 9 ],
    lightLevelRange: [ 400, 900 ]
  },
  {
    cameraBrand: 'Hasselblad',
    cameraModel: 'X1D II 50C',
    distanceRange: [ 2, 7 ],
    lightLevelRange: [ 200, 700 ]
  },
  {
    cameraBrand: 'Pentax',
    cameraModel: 'K-1 Mark II',
    distanceRange: [ 3, 8 ],
    lightLevelRange: [ 300, 800 ]
  },
  {
    cameraBrand: 'Sigma',
    cameraModel: 'fp',
    distanceRange: [ 4, 9 ],
    lightLevelRange: [ 400, 900 ]
  },
  {
    cameraBrand: 'Hasselblad',
    cameraModel: 'X1D II 50C',
    distanceRange: [ 2, 7 ],
    lightLevelRange: [ 200, 700 ]
  },

];

