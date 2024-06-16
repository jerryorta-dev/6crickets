import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApiService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });


  it('should get secondsLeft from the API', (done) => {
    const response$ = service.deadlineApi();
    const spy = jest.fn();
    response$.subscribe(response => {
      expect(response.secondsLeft).toBe(10);
      done();
    });

    const req = httpTestingController.expectOne('http://localhost:3000/api');
    req.flush({ secondsLeft: 10 });

  });

  it('should get secondsLeft from the API every second', fakeAsync(() => {
    const response$ = service.secondsToDeadline();
    const spy = jest.fn()

    response$.subscribe(secondsLeft => {
      spy(secondsLeft);
    });

    const req = httpTestingController.expectOne('http://localhost:3000/api');
    req.flush({ secondsLeft: 2 });

    expect(spy).toHaveBeenCalledWith(1);

    tick(1000);

    expect(spy).toHaveBeenCalledWith(0);

    // Will stop timer from `takeWhile` operator
    tick(1000);

    expect(spy).toHaveBeenCalledWith(0);
  }));
});
