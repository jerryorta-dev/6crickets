import { Route } from '@angular/router';
import { CameraPageComponent } from './pages/camera/camera-page.component';
import { CountdownPageComponent } from './pages/countdown/countdown-page.component';

export const appRoutes: Route[] = [
  {
    path: 'countdown',
    component: CountdownPageComponent
  },
  {
    path: 'camera',
    component: CameraPageComponent
  },
  {
    path: '',
    redirectTo: '/countdown',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/countdown'
  }
];
