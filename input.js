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
    connection.write("Move: up")
  } else if (data === 'a') {
    connection.write("Move: left")
  } else if (data === 's') {
    connection.write("Move: down")
  } else if (data === 'd') {
    connection.write("Move: right")
  } else if (data === 'o') {
    connection.write("Say: NomNomNom")
  } else if (data === 'p') {
    connection.write("Say: wiggle_wiggle_wiggle")
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