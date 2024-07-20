import Match from "../models/match.model.js";
import Tournament from "../models/tournament.model.js";

const generatePairings = async (tournamentId, roundNumber) => {

    try {

        const tournament = await Tournament.findById(tournamentId);
        const players = tournament.participants;

        // O'yinchilarni ochkolari bo'yicha tartiblaymiz
        let scores = {};
        for (let player of players) {
            scores[player._id] = 0;
        }

        const matches = await Match.find({ tournament: tournamentId, round: roundNumber });

        matches.forEach(match => {

            if (match.result === 'player1') {
                scores[match.player1] += 1;
            }

            else if (match.result === 'player2') {
                scores[match.player2] += 1;
            }

            else if (match.result === 'draw') {
                scores[match.player1] += 0.5;
                scores[match.player2] += 0.5;
            }
        });

        let sortedPlayers = players.sort((a, b) => {
            return (scores[b._id] - scores[a._id]) || (a.rating - b.rating);
        });

        let pairings = [];
        let i = 0;
        while (i < sortedPlayers.length) {
            let player1 = sortedPlayers[i];
            let player2 = sortedPlayers[i + 1];
            if (player2) {
                pairings.push({
                    tournament: tournamentId,
                    round: roundNumber,
                    player1: player1._id,
                    player2: player2._id
                });
            }
            i += 2;
        }

        await Match.insertMany(pairings);

    } catch (error) {
        console.log(error.message);
        return error.message
    }

};

export default generatePairings
