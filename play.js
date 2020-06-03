const {connect} = require('./client');

console.log('Connecting ...');

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (handleUserInput));
  return stdin;
}

function handleUserInput(key) {
  if (key === "\u0003") {
  process.exit();
}
};

setupInput();
connect();




