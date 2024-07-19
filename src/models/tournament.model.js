import mongoose from "mongoose";

const tournamentSchema = mongoose.Schema({
    tournament_name: {
        type: String,
        required: true,
        unique: true
    },
    tournament_start_date: {
        type: Date,
        required: true
    },
    tournament_end_date: {
        type: Date,
        required: true
    },
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player'
    }],
});

export default mongoose.model("Tournament", tournamentSchema)