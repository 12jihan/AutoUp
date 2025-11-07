import { computed, Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Clip } from '../models/video.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class Video {
  private clips = signal<Clip[]>([]);
  private currentTime = signal<number>(0);
  private isPlaying = signal<boolean>(false);


  // Readonly Properties
  clips$ = this.clips.asReadonly();
  currentTime$ = this.currentTime.asReadonly();
  isPlaying$ = this.isPlaying.asReadonly();

  // Computed
  totalDuration$ = computed(() => {
    const allClips: Clip[] = this.clips();
    return allClips.length ? Math.max(...allClips.map(c => c.endTime)) : 0;
  });

  // Methods
  addClip(clip: Clip): void {
    let _clip: Clip;

    this.clips.update(clips => [...clips, clip]);
  }

  removeClip(id: string): void {
    this.clips.update(clips => clips.filter(c => c.id !== id));
  }

  play(): void {
    this.isPlaying.set(true);
  }

  pause(): void {
    this.isPlaying.set(false);
  }
  // How I would use this in the component
  // clips$ = this.video.clips$;

}
