/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, CSSProperties } from 'react';
import { animate, utils, createTimeline, stagger, createTimer } from 'animejs';
import './Styles/creature.css';

const rows = 13;
const grid = [rows, rows];
const from = 'center';

type Position = { x: number; y: number };

type CreatureProps = {
  id: string;
  colors: string[];
  movement: {
    xAmp: number;
    yAmp: number;
    xFreq: number;
    yFreq: number;
  };
  initialPosition: Position; // px from top-left of wrapper
};

export default function Creature({ id, colors, movement, initialPosition }: CreatureProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const creatureEl = containerRef.current;
    if (!creatureEl) return;

    const viewport = { w: window.innerWidth * 0.5, h: window.innerHeight * 0.5 };
    const cursor = { x: 0, y: 0 };

    // Initialize dots
    creatureEl.innerHTML = '';
    for (let i = 0; i < rows * rows; i++) {
      const dot = document.createElement('div');
      dot.classList.add('creature-dot');
      creatureEl.appendChild(dot);
    }

    const particuleEls = creatureEl.querySelectorAll<HTMLElement>('.creature-dot');
    const scaleStagger = stagger([2, 5], { ease: 'inQuad', grid, from });
    const opacityStagger = stagger([1, 0.1], { grid, from });

    // Apply initial styles including cycling colors
    (utils as any).set(particuleEls, {
      x: 0,
      y: 0,
      scale: scaleStagger,
      opacity: opacityStagger,
      background: ((_: any, idx: number) => colors[idx % colors.length]) as any,
      boxShadow: stagger([4, 1], {
        grid,
        from,
        modifier: ((v: number) =>
          `0px 0px ${utils.round(v, 0)}em 0px ${colors[v % colors.length] || colors[0]}`) as any,
      }) as any,
      zIndex: stagger([rows * rows, 1], { grid, from, modifier: utils.round(0) }),
    });

    // Pulse animation
    const pulse = () => {
      animate(particuleEls, {
        keyframes: [
          { scale: 5, opacity: 1, delay: stagger(80, { start: 1400, grid, from }), duration: 100 },
          { scale: scaleStagger, opacity: opacityStagger, ease: 'inOutQuad', duration: 400 },
        ],
      });
    };

    // Main follow-loop
    const mainLoop = createTimer({
      frameRate: 30,
      onUpdate: () => {
        animate(particuleEls, {
          x: cursor.x,
          y: cursor.y,
          delay: stagger(30, { grid, from }),
          duration: stagger(90, { start: 500, ease: 'inQuad', grid, from }),
          ease: 'inOut',
          composition: 'blend',
        });
      },
    });

    // Auto movement timeline
    const autoMove = createTimeline()
      .add(
        cursor,
        {
          x: [-viewport.w * 0.2, viewport.w * 0.2],
          modifier: (x) =>
            x + Math.sin(mainLoop.currentTime * movement.xFreq) * viewport.w * movement.xAmp,
          duration: 2000,
          ease: 'inOutExpo',
          alternate: true,
          loop: true,
          onBegin: pulse,
          onLoop: pulse,
        },
        0,
      )
      .add(
        cursor,
        {
          y: [-viewport.h * 0.2, viewport.h * 0.2],
          modifier: (y) =>
            y + Math.cos(mainLoop.currentTime * movement.yFreq) * viewport.h * movement.yAmp,
          duration: 700,
          ease: 'inOutQuad',
          alternate: true,
          loop: true,
        },
        0,
      );

    // Manual override on pointer
    const manualMovementTimeout = createTimer({
      duration: 1000,
      onComplete: () => autoMove.play(),
    });
    const followPointer = (e: MouseEvent | TouchEvent) => {
      const event = e instanceof TouchEvent ? e.touches[0] : e;
      cursor.x = event.pageX - viewport.w;
      cursor.y = event.pageY - viewport.h;
      autoMove.pause();
      manualMovementTimeout.restart();
    };

    document.addEventListener('mousemove', followPointer);
    document.addEventListener('touchmove', followPointer);
    return () => {
      document.removeEventListener('mousemove', followPointer);
      document.removeEventListener('touchmove', followPointer);
      autoMove.pause();
      mainLoop.pause();
    };
  }, [colors, movement]);

  // Position container absolutely at initialPosition
  const style: CSSProperties = {
    position: 'absolute',
    left: initialPosition.x,
    top: initialPosition.y,
  };

  return <div id={id} className="creature-container" ref={containerRef} style={style}></div>;
}
