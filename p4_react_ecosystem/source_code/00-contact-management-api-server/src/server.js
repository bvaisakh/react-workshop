const db = require('./db');
const app = require('./app');
const http = require('http');
const debug = require('debug')('contact-management-app');

const queries = require('./../config/query.json');

const portValue = process.env.PORT;

// Utility method to normalize port number value
const normalizePort = (val) => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
};

db.connect()
  .then((message) => {
    debug(message);

    const port = normalizePort(portValue || '3000');
    app.set('port', port);

    const server = http.createServer(app);
    server.listen(port);

    server.on('listening', () => {
      const addr = server.address();
      const bind =
        typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
      debug('Listening on ' + bind);

      db.execute(queries.contact.createTable)
        .then(() => {
          debug('Successfully created Contact table');
        })
        .catch((error) => {
          debug(error);
        });
    });

    server.on('error', (error) => {
      if (error.syscall !== 'listen') {
        throw error;
      }

      var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

      switch (error.code) {
        case 'EACCES':
          console.error(bind + ' requires elevated privileges');
          process.exit(1);
          break;
        case 'EADDRINUSE':
          console.error(bind + ' is already in use');
          process.exit(1);
          break;
        default:
          throw error;
      }
    });
  })
  .catch((error) => {
    debug(error);
  });
