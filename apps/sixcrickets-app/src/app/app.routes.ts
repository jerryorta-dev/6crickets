import { Route } from '@angular/router';
import { CountdownComponent } from './pages/countdown.component';

export const appRoutes: Route[] = [
  {
    path: 'countdown',
    component: CountdownComponent
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
