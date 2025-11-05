import { Component, inject } from '@angular/core';
import { Video } from '../../services/video';

@Component({
  selector: 'bt-video-editor',
  imports: [],
  templateUrl: './video-editor.html',
  styleUrl: './video-editor.scss',
})
export class VideoEditor {
  videoService: Video = inject(Video);

  togglePlay(): void {
    if (this.videoService.isPlaying$()) {
      this.videoService.pause();
    } else {
      this.videoService.play();
    }
  }
}
