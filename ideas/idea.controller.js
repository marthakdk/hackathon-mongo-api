const express = require('express');
const router = express.Router();
const ideaService = require('./idea.service');

// routes
router.post('/create-new-idea', createNewIdea);
router.put('/:id', upvoteIdea);
router.get('/', getAllIdeas);

module.exports = router;

function getAllIdeas(req, res, next) {
    ideaService.getAllIdeas()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function createNewIdea(req, res, next) {
    ideaService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function upvoteIdea(req, res, next) {
    ideaService.upVoteIdea(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}