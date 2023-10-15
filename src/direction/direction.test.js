import { parseDirection } from "./direction.js"
import { expect, jest, test } from "@jest/globals"

describe("parseDirection", () => {
  describe("When a direction is valid", () => {
    test.each`
      text       | expected
      ${"EAST"}  | ${"EAST"}
      ${"WEST"}  | ${"WEST"}
      ${"NORTH"} | ${"NORTH"}
      ${"SOUTH"} | ${"SOUTH"}
    `("should parse text $text to type $expected", ({ text, expected }) => {
      const result = parseDirection(text)
      expect(result).toBe(expected)
    })
  })

  describe("When a direction is invalid", () => {
    const input = ["NORTHERN", "SOUTHERN", "WESTERMN", "", "-", "_"]
    test.each(input)("should throw error when text is invalid", text => {
      expect(() => parseDirection(text)).toThrowError(
        `Invalid Direction: ${text}`
      )
    })
  })
})
