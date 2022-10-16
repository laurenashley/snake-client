// input.js

const { KEY_MOVEMENTS, KEY_MESSAGES } = require("./constants");

// Stores the active TCP connection object.
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

// When resuming stdin (as done above in setupInput) there needs to be  way for user to exit process
const handleUserInput = (data) => {
  switch (data) {
  case '\u0003':
    // ctrl + c
    process.exit();
    break;
  case 'w':
    connection.write(KEY_MOVEMENTS.MOVE_UP);
    break;
  case 'a':
    connection.write(KEY_MOVEMENTS.MOVE_LEFT);
    break;
  case 's':
    connection.write(KEY_MOVEMENTS.MOVE_DOWN);
    break;
  case 'd':
    connection.write(KEY_MOVEMENTS.MOVE_RIGHT);
    break;
  case 'h':
    connection.write(KEY_MESSAGES.SAY_HI);
    break;
  case 'm':
    connection.write(KEY_MESSAGES.SAY_MOVE);
    break;
  }
};

module.exports = {
  setupInput
};