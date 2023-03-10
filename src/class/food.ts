import Point from "./helpers/point";

export default class Food {

  position: Point = new Point(15, 20);
  range: number;

  constructor(range: number) {
    this.init(range);
  }

  // Initialiyation
  init(range: number) {
    this.range = range;
  }
  
  // Generating new random position for the food
  generatePosition() {
    let x = Math.floor(Math.random() * (this.range-1));
    let y = Math.floor(Math.random() * (this.range-1));

    this.position.changePoint(x, y);
  }
}