# Toy Robot Code Challenge

## Table of Contents:
1.  [Introduction](#introduction)
2.  [Prerequisites](#prerequisites)
3.  [Installation](#installation)
4.  [Running Tests](#running-tests)
5.  [Running Robot Simulation](#running-robot-simulation)
6.  [Other available scripts](#other-available-scripts)
7.  [Problem Statement](#problem-statement)


## Introduction
A toy robot simulator written in Typescript

- The application is a simulation of a toy robot moving on a square table top, of dimensions 5 units x 5 units.
- There are no other obstructions on the table surface.
- The robot is free to roam around the surface of the table but must be prevented from falling to destruction.
- Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed.

## Prerequisites
Before setting up and running the project, ensure you have [node](https://nodejs.org/en/) on your machine. Run the following command in terminal to verify
```
node --version
```


## Installation

1.  Clone the repository to your local machine:

```
git clone https://github.com/Thabang-23/toy-robot.git
```

2.  Navigate to the project directory:

```
cd toy-robot
```

3.  Install the required dependencies:

```
npm install
```


## Running Tests

To run all the tests, run the following command:

```
node --experimental-vm-modules node_modules/jest/bin/jest.js
```

## Running Robot Simulation

To run the toy robot simulation, run the following command:
```
npm run simulation
```
To run a specific command file, run the following command:
```
npm start ./src/data/<command-file>
```

Example:
```
npm start ./src/data/test-1
```

Alternatively, you can create your command file and run it using the above command.


## Other available scripts
To compile Typescript files to Javascript files to `dist` folder with tsc, run the following command:
```
npm run build
```

## Problem Statement

A robot can read commands of the following form from a text file

```
PLACE X,Y,FACE
MOVE
LEFT
RIGHT
REPORT
```

- Input is read from a text file.
- PLACE will put the toy robot on the table in positions X,Y and facing NORTH, SOUTH, EAST, or WEST
- The origin (0,0) is considered to be the SOUTH WEST most corner of the table
- The first valid command to the robot is a PLACE command, after that, any sequence of commands may be issued, in any order, including another PLACE command
- The application will discard all commands in the sequence until a valid PLACE command has been executed
- MOVE will move the toy robot 1 unit forward in the direction it is currently facing
- LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot
- REPORT will announce the X, Y, and F of the robot. This can be in any form, but the standard output is sufficient