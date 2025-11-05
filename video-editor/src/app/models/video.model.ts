export interface Clip {
  id: string;
  file: File;
  startTime: number;
  endTime: number;        // ← ADD THIS
  duration: number;
  effects: VideoEffect[];
}

export interface VideoEffect {
  id: string;
  type: 'brightness' | 'contrast' | 'grayscale' | 'blur' | 'sepia' | 'speedup' | 'slowdown' | 'opacity';
  value: number;
  startTime: number;
  endTime: number;
}

export interface Timeline {
  id: string;
  clips: Clip[];
  duration: number;
  fps: number;
}

export enum EditorStatus {
  IDLE = 'idle',
  PLAYING = 'playing',
  PAUSED = 'paused',
  EXPORTING = 'exporting'
}
