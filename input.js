let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (handleUserInput));
  stdin.on('data', (keyPress));
  stdin.on('data', (keyPressMessage));
  return stdin;
}

function handleUserInput(key) {
  if (key === "\u0003") {
  process.exit();
}
};

function keyPress(key) {
  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 'd') {
    connection.write("Move: right")
  }
  if (key === 's') {
    connection.write("Move: down");
  }
};

function keyPressMessage(key) {
  if (key === 'g'){
    connection.write("Say: GG WP");
  }
  if (key === 'h') {
    connection.write("Say: Hello");
  }
}

module.exports = { connection };
module.exports = setupInput;