import { TestBed } from '@angular/core/testing';

import { PrefilledExpenseService } from './prefilled-expense.service';

describe('SnapshotServiceService', () => {
  let service: PrefilledExpenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrefilledExpenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
