// input.js

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
    process.exit();
    break;
  case 'w':
    connection.write('Move: up');
    break;
  case 'a':
    connection.write('Move: left');
    break;
  case 's':
    connection.write('Move: down');
    break;
  case 'd':
    connection.write('Move: right');
    break;
  }
};

module.exports = {
  setupInput
};