// play.js
const process = require('node:process');
const connect = require('./client');

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// When resuming stdin (as done above in setupInput) there needs to be  way for user to exit process
const handleUserInput = (data) => {
  if (data === '\u0003') {
    process.exit();
  }
};

console.log("Connecting ...");
connect.connect();

setupInput();