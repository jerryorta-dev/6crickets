import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, scan, switchMap, takeWhile, startWith } from 'rxjs/operators';
import { ApiResponse } from '@sixcrickets/shared-domain';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private client = inject(HttpClient);

  private endpoint = 'http://localhost:3000/api';

  /**
   * Do not use this method directly. Use `secondsToDeadline` instead.
   * is public for testing purposes.
   */
  deadlineApi(): Observable<ApiResponse> {
    return this.client.get<ApiResponse>(this.endpoint);
  }

  /**
   * Return update every second countdown to the deadline.
   * Countdown is in seconds.
   * @returns Observable<number>
   */
  secondsToDeadline(): Observable<number> {
    return this.deadlineApi().pipe(
      map((response) => response.secondsLeft),
      switchMap((secondsLeft) => {
        // countdown every second
        return interval(1000).pipe(
          // start with the current time
          startWith(secondsLeft),

          // count down every second
          scan((time) => time - 1, secondsLeft),

          // stop when time is less than 0
          takeWhile((time) => time >= 0)
        );
      })
    );
  }
}
