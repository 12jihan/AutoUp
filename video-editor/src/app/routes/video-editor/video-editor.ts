import { afterNextRender, Component, effect, ElementRef, inject, Signal, viewChild } from '@angular/core';
import { Video } from '../../services/video';
import { VideoManager } from '../../services/video-manager';
// import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'bt-video-editor',
  imports: [],
  templateUrl: './video-editor.html',
  styleUrl: './video-editor.scss',
})
export class VideoEditor {
  videoService: Video = inject(Video);
  videoManager: VideoManager = inject(VideoManager);

  // Canvas ELemenet
  canvas: Signal<ElementRef<HTMLCanvasElement> | undefined> = viewChild<ElementRef<HTMLCanvasElement>>('videoSpace');

  // File Input
  // uploader: Signal<ElementRef<HTMLInputElement> | undefined> = viewChild<ElementRef<HTMLInputElement>>('uploader');


  private ctx: CanvasRenderingContext2D | null = null;

  constructor() {
    // afterNextRender(() => {
    //   const canvasEl = this.canvas();
    //
    //
    //   if (canvasEl) {
    //     this.ctx = canvasEl.nativeElement.getContext('2d');
    //
    //     if (!this.ctx) {
    //       console.error("Failed to get 2D context")
    //       return;
    //     }
    //
    //     this.draw();
    //   }
    // })
  }


  private draw(): void {
    if (!this.ctx) return;


    // Clear the canvas
    this.ctx.clearRect(0, 0, 600, 300);


    // Draw a simple red rectangle
    this.ctx.fillStyle = '#0000FF';
    this.ctx.fillRect(10, 10, 150, 100);

    // Draw a simple red rectangle
    this.ctx.fillStyle = '#FF0000'
    this.ctx.font = '30px Arial';
    this.ctx.fillText('Hello from Modern Angular!', 10, 200);
  }

  togglePlay(): void {
    if (this.videoService.isPlaying$()) {
      this.videoService.pause();
    } else {
      this.videoService.play();
    }
  }

  onFileSelected(test: Event): void {
    if (event) {
      const input = event.target as HTMLInputElement;
    }
    console.log("video info:", test)
  }
}
