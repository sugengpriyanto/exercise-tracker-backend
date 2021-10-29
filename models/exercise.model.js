const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    duration: {type: Number, required: true},
    date: {type: Date, required: true, default: Date.now}
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;