export const parseDirection = text => {
    switch (text && text.toUpperCase()) {
      case "NORTH":
        return "NORTH"
      case "SOUTH":
        return "SOUTH"
      case "WEST":
        return "WEST"
      case "EAST":
        return "EAST"
      default:
        throw new Error(`Invalid Direction: ${text}`)
    }
  }
  