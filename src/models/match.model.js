import mongoose from "mongoose";

const matchSchema = mongoose.Schema({
    tournament: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tournament",
        required: true
    },
    round: {
        type: Number,
        required: true
    },
    player1: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player',
        required: true
    },
    player2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player',
        required: true
    },
    result: {
        type: String,
        enum: ['player1', 'player2', 'draw'],
        required: true
    },
})

export default mongoose.model("Match", matchSchema)