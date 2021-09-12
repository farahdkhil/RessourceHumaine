import { TestBed } from '@angular/core/testing';

import { UploadfileService } from './service-uploadfile.service';

describe('ServiceUploadfileService', () => {
  let service: UploadfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
