import fs from "fs"

export const readCommand = filePath =>
  new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (error, data) => {
      if (error) {
        reject(error)
        return
      }
      resolve(data)
    })
  }).then(context => {
    return context.split(/\r?\n/).filter(line => !!line)
  })

export const nextMove = {
  EAST: {
    x: 1,
    y: 0
  },
  WEST: {
    x: -1,
    y: 0
  },
  NORTH: {
    x: 0,
    y: 1
  },
  SOUTH: {
    x: 0,
    y: -1
  }
}

export const processNextMove = direction => {
  if (nextMove[direction]) return nextMove[direction]
  throw new Error(`Invalid Direction: ${direction}`)
}

export const getInstruction = () => `
Please try the following commands:
------------------------------------

PLACE X,Y,Facing
- Put the toy robot on the table in position X,Y,Facing
- Facing can be on of these: EAST, WEST, NORTH, SOUTH
- Example: PLACE 2,2,NORTH

LEFT
- Turn the robot left.

RIGHT
- Turn the robot right.

MOVE
- Move the robot one unit forward in the direction it is currently facing.

REPORT
- Announce the current position and facing of the robot.

Note: 
- It is required that the first command to the robot is a PLACE command.
- After PLACE command, any sequence of commands may be issued.
- The application should discard all commands in the sequence until 
  a valid PLACE command has been executed.
`
