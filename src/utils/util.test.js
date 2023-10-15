import { readCommand, processNextMove } from "./utils.js"
import { expect, jest, test } from "@jest/globals"

jest.mock("fs")

describe("processNextMove", () => {
  describe("When a DIRECTION is valid", () => {
    test.each`
      direction  | expected
      ${"EAST"}  | ${{ x: 1, y: 0 }}
      ${"WEST"}  | ${{ x: -1, y: 0 }}
      ${"NORTH"} | ${{ x: 0, y: 1 }}
      ${"SOUTH"} | ${{ x: 0, y: -1 }}
    `(
      "should return the position $expected when direction = $direction",
      ({ direction, expected }) => {
        const result = processNextMove(direction)
        expect(result).toEqual(expected)
      }
    )
  })

  describe("When a DIRECTION is Invalid", () => {
    const input = ["EASTWEST", "WESTNORTH", "NORTHSOUTH", "SOUTHEAST"]
    test.each(input)(
      "should throw error when the direction is invalid (direction = %p)",
      direction => {
        expect(() => processNextMove(direction)).toThrowError()
      }
    )
  })
})
