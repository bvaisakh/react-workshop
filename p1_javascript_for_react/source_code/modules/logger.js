function print(message) {
  log(message, new Date());
}

function log(message, timestamp) {
  console.log(`${timestamp.toString()}: ${message}`);
}

export { print, log };
