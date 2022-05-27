import { TestBed } from '@angular/core/testing';

import { PrioButtonsService } from './prio-buttons.service';

describe('PrioButtonsService', () => {
  let service: PrioButtonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrioButtonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
