// Client
const net = require("net");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', data => {
    console.log('Message from the server: ', data);
  });
  return conn;
};

console.log("Connecting ...");
connect();