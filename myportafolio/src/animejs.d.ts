// src/animejs.d.ts
import anime from 'animejs';

declare module 'animejs' {
  export function timeline(params?: anime.AnimeParams): anime.AnimeTimelineInstance;
}
