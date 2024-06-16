import { TestBed } from '@angular/core/testing';

import { CameraMatchService } from './camera-match.service';

describe('CameraMatchService', () => {
  let service: CameraMatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CameraMatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
