const express = require('express');
const router = express.Router();
const userService = require('./users.service');

// routes
router.post('/authenticate', authenticate);
router.post('/register', register); // added for internal use
router.get('/', getAll);

module.exports = router;

function authenticate(req, res, next) {
    console.log(req.body);
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function register(req, res, next) {
    console.log(req.body);
    userService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}