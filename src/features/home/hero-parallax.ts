import { gsap, REDUCED_MOTION_QUERY } from '../../motion/gsap';

/**
 * Paralaje de la ilustración de la portada.
 *
 * La imagen vive detrás del texto, a la derecha. Se mueve menos que el scroll y
 * acompaña apenas al puntero; con `prefers-reduced-motion` no se anima nada.
 */
export function initHeroParallax(layer: HTMLElement) {
  const media = gsap.matchMedia();

  media.add(
    { reduce: REDUCED_MOTION_QUERY, animate: '(prefers-reduced-motion: no-preference)' },
    (context) => {
      if (context.conditions?.reduce) {
        return;
      }

      const moveY = gsap.quickTo(layer, 'y', { duration: 0.7, ease: 'power3.out' });
      const moveX = gsap.quickTo(layer, 'x', { duration: 0.7, ease: 'power3.out' });

      const onScroll = () => {
        moveY(Math.min(window.scrollY * 0.18, 180));
      };

      const onPointer = (event: PointerEvent) => {
        if (event.pointerType !== 'mouse') {
          return;
        }

        moveX((event.clientX / window.innerWidth - 0.5) * 18);
      };

      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('pointermove', onPointer, { passive: true });

      return () => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('pointermove', onPointer);
      };
    },
  );
}
