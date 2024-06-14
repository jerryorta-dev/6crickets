export declare type CameraRange = [ number, number ];

export interface HardwareCamera {
  cameraBrand: string;
  cameraModel: string;
  distanceRange: CameraRange;
  lightLevelRange: CameraRange;
}

export interface SoftwareCamera {
  softwareCamera: string;
  distanceRange: CameraRange;
  lightLevelRange: CameraRange;
}
