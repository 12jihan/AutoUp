import { TestBed } from '@angular/core/testing';

import { VideoManager } from './video-manager';

describe('VideoManager', () => {
  let service: VideoManager;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoManager);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
