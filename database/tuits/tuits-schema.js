import mongoose from "mongoose";
import tuits from "../../controllers/tuits.js";

const tuitsSchema = mongoose.Schema({
    topic: String,
    liked: Boolean,
    disliked: Boolean,
    verified: Boolean,
    handle: String,
    time: String,
    title: String,
    tuit: String,
    postedBy: {
        username: String
    },
    attachments: {
        image: String
    },
    "logo-image": String,
    "avatar-image": String,
    stats:{
        comments: Number,
        retuits: Number,
        likes: Number,
        dislikes: Number
    }
},{collection:'tuits'});

export default  tuitsSchema;