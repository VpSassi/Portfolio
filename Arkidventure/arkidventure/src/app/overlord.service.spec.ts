import { TestBed } from '@angular/core/testing';

import { OverlordService } from './overlord.service';

describe('OverlordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OverlordService = TestBed.get(OverlordService);
    expect(service).toBeTruthy();
  });
});
