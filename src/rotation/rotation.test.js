import { turnLeft, turnRight } from "./rotation.js"
import { expect, jest, test } from "@jest/globals"

describe("LEFT & RIGHT Action Test", () => {
  describe("LEFT TURN", () => {
    test.each`
      input      | output
      ${"EAST"}  | ${"NORTH"}
      ${"WEST"}  | ${"SOUTH"}
      ${"NORTH"} | ${"WEST"}
      ${"SOUTH"} | ${"EAST"}
    `("should turn from $input to $output", ({ input, output }) => {
      const result = turnLeft(input)
      expect(result).toBe(output)
    })
  })

  describe("RIGHT TURN", () => {
    test.each`
      input      | output
      ${"EAST"}  | ${"SOUTH"}
      ${"WEST"}  | ${"NORTH"}
      ${"NORTH"} | ${"EAST"}
      ${"SOUTH"} | ${"WEST"}
    `("should turn from $input to $output", ({ input, output }) => {
      const result = turnRight(input)
      expect(result).toBe(output)
    })
  })

  describe("When a DIRECTION is Invalid", () => {
    const input = [
      "EASTWEST",
      "WESTNORTH",
      "NORTHSOUTH",
      "SOUTHEAST",
      null,
      undefined
    ]
    test.each(input)(
      "should throw error when the direction is invalid",
      direction => {
        expect(() => turnLeft(direction)).toThrowError(
          `Invalid Direction: ${direction}`
        )
        expect(() => turnRight(direction)).toThrowError(
          `Invalid Direction: ${direction}`
        )
      }
    )
  })
})
