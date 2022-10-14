// play.js

const connect = require('./client');

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = data => {
  // Check for ctrl + c input to terminate the game
};

console.log("Connecting ...");
connect.connect();

setupInput();