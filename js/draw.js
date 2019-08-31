export class Draw {
  constructor(element) {
    this.context = element.getContext('2d');
    this.w = element.width;
    this.h = element.height;
    this.color = '#000';
  }

  clear() {
    this.context.clearRect(0, 0, this.w, this.h);
  }

  pset(x, y) {
    this.context.fillStyle = this.color;
    this.context.fillRect(x,y,1,1);
  }
}