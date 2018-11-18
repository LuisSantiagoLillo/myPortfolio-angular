import { TestBed, inject } from '@angular/core/testing';

import { FirebaseLinksService } from './firebase-links.service';

describe('FirebaseLinksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseLinksService]
    });
  });

  it('should be created', inject([FirebaseLinksService], (service: FirebaseLinksService) => {
    expect(service).toBeTruthy();
  }));
});
