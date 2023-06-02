import { TestBed } from '@angular/core/testing';
import { ConsumeService } from './consume.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ConsumeService', () => {
  let service: ConsumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ConsumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
