import { Draw } from './draw.js';

/** Function that maps varible within given range. */
const xmap = (n, start1, stop1, start2, stop2) => {
  return (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
};

/** Function that draws Mandelbrot fractal within given zoomFactors */
const drawMandelbrot = (zoomFactorX, zoomFactorY) => {
  for (let i = 0; i < draw.w; i++) {
    for (let j = 0; j < draw.h; j++) {
      let a = xmap(i, 0, draw.w, -zoomFactorX, zoomFactorX);
      let b = xmap(j, 0, draw.h, -zoomFactorY, zoomFactorY);

      let ca = a;
      let cb = b;
      let n = 0;

      while (n < maxi) {
        let aa = a * a - b * b;
        let bb = 2 * a * b;
        a = aa + ca;
        b = bb + cb;

        if (a + b > maxz) {
          break;
        }
        n++;
      }

      let bright = xmap(n, 0, maxi, 0, 255);
      if (n === maxi) {
        bright = 0;
      }

      draw.color = `rgb(${bright}, ${bright}, 0)`;
      draw.pset(i, j);
    }
  }
};

// Main loop
const el = document.getElementById('canvas');
const draw = new Draw(el);

const maxz = 16;
const maxi = 200;

const zoomFactor = 1.6;

// Main draw loop
drawMandelbrot(zoomFactor, zoomFactor);