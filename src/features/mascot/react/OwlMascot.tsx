import { useEffect, useRef, useState } from 'react';
import { OwlPlayer, type OwlAction } from '../owl-player.js';

type Props = {
  /** Ruta pública a la carpeta que contiene assets/. */
  baseUrl?: string;
  action?: OwlAction;
  /** Cambiar este valor permite repetir una acción idéntica. */
  actionKey?: number;
  followPointer?: boolean;
  parallax?: boolean;
  automatic?: boolean;
  paused?: boolean;
  speed?: number;
  background?: 'night' | 'desk';
  className?: string;
  /** Alto del lienzo. Por defecto, el tamaño grande de la página de verificación. */
  height?: string;
};

export function OwlMascot({ baseUrl = '/buho', action = 'idle', actionKey = 0,
  followPointer = false, parallax = true, automatic = true,
  paused = false, speed = 1, background = 'night', className,
  height = 'clamp(280px, 48vw, 540px)' }: Props) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const player = useRef<OwlPlayer | null>(null);
  const [error, setError] = useState('');
  useEffect(() => {
    if (!canvas.current) return;
    setError('');
    let active = true;
    const instance = new OwlPlayer(canvas.current, { baseUrl });
    player.current = instance;
    instance.loadPromise.catch(err => { if (active) setError(String(err)); });
    return () => { active = false; instance.destroy(); player.current = null; };
  }, [baseUrl]);
  useEffect(() => {
    player.current?.setOptions({ followPointer, parallax, automatic, speed, background });
    player.current?.pause(paused);
  }, [baseUrl, followPointer, parallax, automatic, speed, background, paused]);
  useEffect(() => { player.current?.play(action); }, [baseUrl, action, actionKey]);
  return (
    <div className={className} style={{ position: 'relative', width: '100%' }}>
      <canvas ref={canvas} tabIndex={0} role="img"
        aria-label="Búho animado. Pulsa Intro o toca el escenario para saludar."
        style={{ display: 'block', width: '100%', height,
          borderRadius: 20, touchAction: 'pan-y' }} />
      {error && <p role="alert">No se pudo cargar la animación. Comprueba la ruta baseUrl.</p>}
    </div>
  );
}
