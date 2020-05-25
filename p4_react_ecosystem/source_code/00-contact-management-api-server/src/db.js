const sqlite3 = require('sqlite3').verbose();
const debug = require('debug')('contact-management-app');
const Promise = require('bluebird');

let db;

// Method to connect to the db
const connect = () => {
  return new Promise(function (resolve, reject) {
    db = new sqlite3.Database(':memory:', (error) => {
      if (error) {
        reject(error.message);
      }

      resolve('Connected to the in memory SQLite database.');
    });
  });
};

// Method to execute any fire and forget query
const execute = (query) => {
  debug(query);
  return new Promise(function (resolve, reject) {
    db.run(query, (error) => {
      if (error) {
        return reject(error.message);
      }
      return resolve();
    });
  });
};

// Method to execute query and retrieve result
const executeQuery = (query, data, isGetAll) => {
  debug(query);
  debug(data);

  return new Promise(function (resolve, reject) {
    if (isGetAll) {
      db.all(query, data, (error, result) => {
        if (error) {
          return reject(error.message);
        }
        debug(data);
        return resolve(result);
      });
    } else {
      db.get(query, data, (error, result) => {
        if (error) {
          return reject(error.message);
        }
        debug(data);
        return resolve(result);
      });
    }
  });
};


// Method to run query with arguments
const executeUpdate = (query, data) => {
  debug(query);
  debug(data);
  return new Promise(function (resolve, reject) {
    db.run(query, data, (error) => {
      if (error) {
        return reject(error.message);
      }
      return resolve();
    });
  });
};

module.exports = {
  db,
  connect,
  execute,
  executeQuery,
  executeUpdate,
};
