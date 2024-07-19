import mongoose from "mongoose";

const leaderboardSchema = mongoose.Schema({
    tournament: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tournament',
        required: true

    },
    player: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player',
        required: true

    },
    points: {
        type: Number,
        required: true

    },
    rank: {
        type: Number,
        required: true

    },
},
    { timestamps: true }
);

export default mongoose.model("Leaderboard", leaderboardSchema);