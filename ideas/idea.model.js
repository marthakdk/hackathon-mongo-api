const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuid = require('uuid');

const schema = new Schema({
    id: { type: String, unique: true, required: true, default: function genUUID(){
        return uuid.v4();
    }},
    title: { type: String, unique: true, required: true },
    description: { type: String, required: true },
    createdBy: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    upvotes: {type: Number, default: 0}
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('Ideas', schema);