export class Table {
    constructor(width, height) {
      this._width = width
      this._height = height
    }
  
    get width() {
      return this._width
    }
  
    get height() {
      return this._height
    }
  
    isWithinRange(x, y) {
      return x >= 0 && x < this._width && y >= 0 && y < this._height
    }
  }
  