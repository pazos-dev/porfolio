/**
 * Punto único de entrada a GSAP.
 *
 * Centraliza los valores por defecto y la consulta de movimiento reducido para
 * que todas las animaciones se comporten igual. Los plugins (ScrollTrigger,
 * SplitText…) se registran en el módulo que los usa: así una página sin scroll
 * animado no descarga su código.
 *
 * GSAP es del lado del cliente: importar este módulo desde un script de Astro o
 * una isla, nunca desde el frontmatter de una página.
 */
import { gsap } from 'gsap';

export const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

gsap.defaults({ duration: 0.6, ease: 'power2.out' });

export { gsap };
