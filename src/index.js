import path from "path"
import { Table } from "./table/table.js"
import { Robot } from "./robot/robot.js"
import { parseCommand } from "./command/command.js"
import { readCommand, getInstruction } from "./utils/utils.js"

export const startSimulation = async () => {
  try {
    // get the filename
    const fileName = process.argv[2]

    if (fileName) {
      const filePath = path.resolve(fileName)
      // read commands from the file
      const commands = await readCommand(filePath)

      // validate the commands
      const validCommands = commands.map(parseCommand)

      // create a table of dimenstion 5 x 5 units
      const table = new Table(5, 5)

      // initalize a robot with a table
      const robot = new Robot(table)

      // execute commands
      for (let i = 0; i < validCommands.length; i++) {
        robot.run(validCommands[i]);
      }
    } else {
      console.log(`Please provide a fileName to run simulation.
    For example: npm start ./src/tests/data/simulation-1`)
    }
  } catch (error) {
    console.error(error)
    console.log(getInstruction())
  }
}

startSimulation()
