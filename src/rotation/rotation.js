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
  
  export const turnLeft = direction => {
    if (rotation[direction]) return rotation[direction].LEFT
    throw new Error(`Invalid Direction: ${direction}`)
  }
  
  export const turnRight = direction => {
    if (rotation[direction]) return rotation[direction].RIGHT
    throw new Error(`Invalid Direction: ${direction}`)
  }
  