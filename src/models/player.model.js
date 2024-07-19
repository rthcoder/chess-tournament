import mongoose from "mongoose";

const playerSchema = mongoose.Schema({
    player_name: {
        type: String,
        required: true
    },
    player_age: {
        type: Number,
        required: true
    },
    player_rating: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        requried: true
    },
},
    {
        timestamp: true
    },
);

export default mongoose.model("Player", playerSchema)