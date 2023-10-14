import { parseDirection } from "../direction/direction.js"

export const parseCommand = command => {
  const args = command.trim().split(/ |,/)

  switch (args[0].toUpperCase()) {
    case "PLACE":
      return {
        type: "PLACE",
        x: parseInt(args[1], 10),
        y: parseInt(args[2], 10),
        direction: parseDirection(args[3] || "")
      }
    case "LEFT":
      return { type: "LEFT" }
    case "RIGHT":
      return { type: "RIGHT" }
    case "MOVE":
      return { type: "MOVE" }
    case "REPORT":
      return { type: "REPORT" }
    default:
      throw new Error(`Invalid Command: ${args[0]}`)
  }
}
