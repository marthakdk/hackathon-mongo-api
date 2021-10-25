const db = require('helpers/database');
var mongoose = require('mongoose');
const Ideas = db.Ideas;

module.exports = {
    getAllIdeas,
    upVoteIdea,
    create,
};

async function getAllIdeas() {
    return await Ideas.find();
}

async function create(ideaParams) {
    if (await Ideas.findOne({ title: ideaParams.title })) {
        throw 'Idea "' + ideaParams.title + '" already exists';
    }
    const idea = new Ideas(ideaParams);
    await idea.save();
}

async function upVoteIdea(id, ideaParams) {
    const idea = await Ideas.findById(id);
    if (!idea) throw 'Idea not found';
    Object.assign(idea, ideaParams);
    await idea.save();
}

