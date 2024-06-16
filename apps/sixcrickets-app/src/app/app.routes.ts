import { Route } from '@angular/router';
import { CountdownPageComponent } from './pages/countdown/countdown-page.component';

export const appRoutes: Route[] = [
  {
    path: 'countdown',
    component: CountdownPageComponent
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
