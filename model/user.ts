import mongoose from "mongoose";
import { Schema, models, model } from "mongoose";

const birdSchema = new Schema({
    rank : Number,
    username : String,
    kills : Number,
    birdLive : Number
})

const Birds = mongoose.models.bird || mongoose.model('bird', birdSchema)

export default Birds