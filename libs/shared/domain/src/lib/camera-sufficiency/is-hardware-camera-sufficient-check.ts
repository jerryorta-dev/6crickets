import { CameraRange, HardwareCamera } from './camera.model';


/**
 * Software cameras may be any range.
 * Hardware cameras are a list of cameras with specific distance and light level ranges.
 * @param desiredDistanceRange
 * @param desiredLightLevelRange
 * @param hardwareCameras
 */
export function isHardwareCameraSufficientCheck(
  desiredDistanceRange: CameraRange,
  desiredLightLevelRange: CameraRange,
  hardwareCameras: HardwareCamera[]
): boolean {
  const [ desiredMinDistance, desiredMaxDistance ] = desiredDistanceRange;
  const [ desiredMinLight, desiredMaxLight ] = desiredLightLevelRange;


  // Iterate over all hardware cameras to find all the cameras that cover the desired distance and light level ranges
  const matchedCameras: HardwareCamera[] = [];

  for (const camera of hardwareCameras) {
    const [ cameraMinDistance, cameraMaxDistance ] = camera.distanceRange;
    const [ cameraMinLight, cameraMaxLight ] = camera.lightLevelRange;

    if ((cameraMinDistance <= desiredMinDistance) && (cameraMaxDistance >= desiredMaxDistance) &&
      (cameraMinLight <= desiredMinLight) && (cameraMaxLight >= desiredMaxLight)) {
      matchedCameras.push(camera);
    }
  }

  // If there are any matched cameras, then the hardware camera is sufficient
  return matchedCameras.length > 0;
}


/**
 * return list of matched cameras.
 * Used for UI to display the matched cameras.
 */
export function getMatchedCameras(
  desiredDistanceRange: CameraRange,
  desiredLightLevelRange: CameraRange,
  hardwareCameras: HardwareCamera[]): HardwareCamera[] {
  const [ desiredMinDistance, desiredMaxDistance ] = desiredDistanceRange;
  const [ desiredMinLight, desiredMaxLight ] = desiredLightLevelRange;
  const matchedCameras: HardwareCamera[] = [];

  for (const camera of hardwareCameras) {
    const [ cameraMinDistance, cameraMaxDistance ] = camera.distanceRange;
    const [ cameraMinLight, cameraMaxLight ] = camera.lightLevelRange;

    if ((cameraMinDistance <= desiredMinDistance) && (cameraMaxDistance >= desiredMaxDistance) &&
      (cameraMinLight <= desiredMinLight) && (cameraMaxLight >= desiredMaxLight)) {
      matchedCameras.push(camera);
    }
  }

  return matchedCameras;
}

/**
 * Alternative approach to reuse the getMatchedCameras function as
 * a sufficient check.
 * return if any camera is matched.
 */
export function isAnyCameraMatched(
  desiredDistanceRange: CameraRange,
  desiredLightLevelRange: CameraRange,
  hardwareCameras: HardwareCamera[]): boolean {
  return getMatchedCameras(desiredDistanceRange, desiredLightLevelRange, hardwareCameras).length > 0;
}
