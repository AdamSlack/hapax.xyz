import { TestBed, inject } from '@angular/core/testing';

import { CarouselHighlightsService } from './carousel-highlights.service';

describe('CarouselHighlightsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarouselHighlightsService]
    });
  });

  it('should be created', inject([CarouselHighlightsService], (service: CarouselHighlightsService) => {
    expect(service).toBeTruthy();
  }));
});
