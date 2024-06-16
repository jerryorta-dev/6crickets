export declare type CameraRange = [ number, number ];

export interface CameraRangeSpec {
  distanceRange: CameraRange;
  lightLevelRange: CameraRange;
}


export interface HardwareCamera extends CameraRangeSpec {
  cameraBrand: string;
  cameraModel: string;
}

export interface SoftwareCamera extends CameraRangeSpec {
  softwareCamera: string;
}

