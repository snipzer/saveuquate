import mongoose from 'mongoose';


const Schema = mongoose.Schema;

const Kittens = new Schema(
    {
        name: { type: String, required: true, unique: true },
        color: { type: String },
        race: { type: String },
    });

module.exports = mongoose.model('Kittens', Kittens);