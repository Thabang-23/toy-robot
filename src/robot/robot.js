import { processNextMove } from "../utils/utils.js"
import { turnLeft, turnRight } from "../rotation/rotation.js"

export class Robot {
  constructor(table) {
    this._isPlaced = false
    this._table = table
  }

  get x() {
    return this._x
  }

  get y() {
    return this._y
  }

  get direction() {
    return this._direction
  }

  place(x, y, direction) {
    if (!this._table.isWithinRange(x, y)) {
      return
    }
    this._x = x
    this._y = y
    this._direction = direction
    this._isPlaced = true
  }

  move() {
    if (!this._isPlaced) {
      return
    }
    const { x, y } = processNextMove(this._direction)
    if (!this._table.isWithinRange(x + this._x, y + this._y)) {
      return
    }
    this._x += x
    this._y += y
  }

  left() {
    if (!this._isPlaced) {
      return
    }
    this._direction = turnLeft(this._direction)
  }

  right() {
    if (!this._isPlaced) {
      return
    }
    this._direction = turnRight(this._direction)
  }

  report = () => {
    if (!this._isPlaced) {
      return
    }
    console.log(`Output: ${this._x},${this._y},${this._direction}`)
  }

  run(command) {
    switch (command.type) {
      case "PLACE":
        this.place(command.x, command.y, command.direction)
        break
      case "LEFT":
        this.left()
        break
      case "RIGHT":
        this.right()
        break
      case "MOVE":
        this.move()
        break
      case "REPORT":
        this.report()
        break
    }
  }
}
