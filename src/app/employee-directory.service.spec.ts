import { TestBed } from '@angular/core/testing';

import { EmployeeDirectoryService } from './employee-directory.service';

describe('EmployeeDirectoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeDirectoryService = TestBed.get(EmployeeDirectoryService);
    expect(service).toBeTruthy();
  });
});
