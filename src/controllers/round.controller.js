import Match from '../models/match.model.js';
import Tournament from '../models/tournament.model.js';
import generatePairings from "../services/generateParings.js"


const generateNewRoundPairings = async (req, res, next) => {

    const { id, roundNumber } = req.params;

    await generatePairings(id, parseInt(roundNumber));

    return res
        .status(200)
        .json({
            status: 200,
            message: 'Pairings generated successfully!'
        });
};

export default {
    generateNewRoundPairings
}