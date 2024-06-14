import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '@sixcrickets/shared';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private client = inject(HttpClient);

  private endpoint = 'http://localhost:3000/api';

  deadline(): Observable<ApiResponse> {
    return this.client.get<ApiResponse>(this.endpoint);
  }

}
