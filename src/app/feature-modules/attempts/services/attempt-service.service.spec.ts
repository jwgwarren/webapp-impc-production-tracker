import { TestBed } from '@angular/core/testing';

import { AttemptServiceService } from './attempt-service.service';

describe('AttemptServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AttemptServiceService = TestBed.get(AttemptServiceService);
    expect(service).toBeTruthy();
  });
});
