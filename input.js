/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

 // Stores the active TCP connection object.
let connection;


const handleUserInput = function (data) {
  if (data === '\u0003') {
    process.exit();
  } else if (data === 'w') {
    console.log("up")
  } else if (data === 'a') {
    console.log("left")
  } else if (data === 's') {
    console.log("down")
  } else if (data === 'd') {
    console.log("right")
  }
};


const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput)


  return stdin;
};

module.exports = {setupInput};