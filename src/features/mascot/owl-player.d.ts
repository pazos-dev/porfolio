export type OwlAction = 'idle' | 'blink' | 'wave' | 'flap' | 'jump' | 'celebrate';
export interface OwlOptions {
  baseUrl?: string;
  sources?: Record<string, string>;
  followPointer?: boolean;
  parallax?: boolean;
  automatic?: boolean;
  background?: 'night' | 'desk';
  speed?: number;
  size?: number;
  onReady?: () => void;
  onAction?: (action: OwlAction) => void;
  onEnd?: (action: OwlAction) => void;
}
export declare const OWL_ANIMATIONS: Record<string, { key: string; durations: number[] }>;
export declare class OwlPlayer {
  constructor(canvas: HTMLCanvasElement, options?: OwlOptions);
  loadPromise: Promise<void>;
  ready: boolean;
  paused: boolean;
  action: OwlAction;
  play(action: OwlAction): this;
  pause(value?: boolean): this;
  setOptions(options: Partial<OwlOptions>): this;
  destroy(): void;
}
