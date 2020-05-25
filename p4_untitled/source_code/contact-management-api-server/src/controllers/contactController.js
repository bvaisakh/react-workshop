const express = require('express');
const debug = require('debug')('app');
const createError = require('http-errors');
const { v4: uuid } = require('uuid');
const db = require('../db');
const queries = require('../../config/query.json');
const router = express.Router();

const errorHandler = (error, next) => {
  debug(error);
  return next(createError(500));
};

const getUser = async (id) => {
  const user = await db.executeQuery(queries.contact.selectOne, [id], false);
  return user;
};

const createUserHandler = (req, res, next) => {
  const id = uuid();
  const data = [id, req.body.name, req.body.mail, req.body.phone];

  db.executeUpdate(queries.contact.insert, data)
    .then(async () => {
      const user = await getUser(id);
      return res.json(user);
    })
    .catch((error) => {
      return errorHandler(error, next);
    });
};

const getAllUserHandler = (req, res, next) => {
  db.executeQuery(queries.contact.selectAll, [], true)
    .then((users) => {
      return res.json(users);
    })
    .catch((error) => {
      return errorHandler(error, next);
    });
};

const getUserHandler = async (req, res, next) => {
  const id = req.params.id;

  try {
    const user = await getUser(id);
    return res.json(user);
  } catch (error) {
    return errorHandler(error, next);
  }
};

const updateUserHandler = (req, res, next) => {
  const id = req.params.id;
  const params = [id, req.body.name, req.body.mail, req.body.phone, id];

  db.executeUpdate(queries.contact.update, params)
    .then(async () => {
      const user = await getUser(id);
      return res.json(user);
    })
    .catch((error) => {
      return errorHandler(error, next);
    });
};

router.post('/', createUserHandler);
router.get('/', getAllUserHandler);
router.get('/:id', getUserHandler);
router.put('/:id', updateUserHandler);

module.exports = router;
