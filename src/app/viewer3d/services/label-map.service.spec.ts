import { TestBed } from '@angular/core/testing';

import { LabelMapService } from './label-map.service';

describe('LabelMapService', () => {
  let service: LabelMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabelMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
