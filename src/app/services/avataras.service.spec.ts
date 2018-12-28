import { TestBed } from '@angular/core/testing';

import { AvatarasService } from './avataras.service';

describe('AvatarasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvatarasService = TestBed.get(AvatarasService);
    expect(service).toBeTruthy();
  });
});
