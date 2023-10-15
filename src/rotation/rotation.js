/**
 * Rotates the robot 90 degrees in the chosen direction.
 */
export const rotation = {
  EAST: {
    LEFT: "NORTH",
    RIGHT: "SOUTH"
  },
  WEST: {
    LEFT: "SOUTH",
    RIGHT: "NORTH"
  },
  NORTH: {
    LEFT: "WEST",
    RIGHT: "EAST"
  },
  SOUTH: {
    LEFT: "EAST",
    RIGHT: "WEST"
  }
}

/**
 * Rotates robot left.
 */
export const turnLeft = direction => {
  if (rotation[direction]) return rotation[direction].LEFT
  throw new Error(`Invalid Direction: ${direction}`)
}

/**
 * Rotates robot right.
 */
export const turnRight = direction => {
  if (rotation[direction]) return rotation[direction].RIGHT
  throw new Error(`Invalid Direction: ${direction}`)
}
