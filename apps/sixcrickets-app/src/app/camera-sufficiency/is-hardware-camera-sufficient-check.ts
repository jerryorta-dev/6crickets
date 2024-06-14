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
  const [desiredMinDistance, desiredMaxDistance] = desiredDistanceRange;
  const [desiredMinLight, desiredMaxLight] = desiredLightLevelRange;

  let coveredMinDistance = Infinity;
  let coveredMaxDistance = -Infinity;
  let coveredMinLight = Infinity;
  let coveredMaxLight = -Infinity;

  // Iterate over all hardware cameras to find the minimum and maximum distance and light level ranges covered by them
  for (const camera of hardwareCameras) {
    const [cameraMinDistance, cameraMaxDistance] = camera.distanceRange;
    const [cameraMinLight, cameraMaxLight] = camera.lightLevelRange;

    // Update the minimum and maximum ranges covered by the hardware cameras
    coveredMinDistance = Math.min(coveredMinDistance, cameraMinDistance);
    coveredMaxDistance = Math.max(coveredMaxDistance, cameraMaxDistance);

    // Update the minimum and maximum light levels covered by the hardware cameras
    coveredMinLight = Math.min(coveredMinLight, cameraMinLight);
    coveredMaxLight = Math.max(coveredMaxLight, cameraMaxLight);
  }

  // Check if the desired distance and light level ranges are covered by the hardware cameras
  const distanceCoverageSufficient = (coveredMinDistance <= desiredMinDistance) && (coveredMaxDistance >= desiredMaxDistance);

  // Check if the desired light level range is covered by the hardware cameras
  const lightLevelCoverageSufficient = (coveredMinLight <= desiredMinLight) && (coveredMaxLight >= desiredMaxLight);

  // Return whether the coverage is
  return distanceCoverageSufficient && lightLevelCoverageSufficient;
}

// // Example usage:
// const desiredDistanceRange: CameraRange = [1, 10];
// const desiredLightLevelRange: CameraRange = [100, 1000];
//
// const hardwareCameras: HardwareCamera[] = [
//   { distanceRange: [1, 5], lightLevelRange: [100, 500] },
//   { distanceRange: [5, 10], lightLevelRange: [500, 1000] },
//   { distanceRange: [2, 8], lightLevelRange: [300, 800] }
// ];
//
// const result = isCoverageSufficient(desiredDistanceRange, desiredLightLevelRange, hardwareCameras);
// console.log("Coverage sufficient:", result);
