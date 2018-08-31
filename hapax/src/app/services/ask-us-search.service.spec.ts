import { TestBed, inject } from '@angular/core/testing';

import { AskUsSearchService } from './ask-us-search.service';

describe('AskUsSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AskUsSearchService]
    });
  });

  it('should be created', inject([AskUsSearchService], (service: AskUsSearchService) => {
    expect(service).toBeTruthy();
  }));
});
