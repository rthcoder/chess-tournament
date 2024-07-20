import Player from "../models/player.model.js"
import Tournament from "../models/tournament.model.js";

const GET = async (req, res, next) => {
    try {

        if (req.params.id) {
            const tournament = await Tournament.findById(req.params.id);

            if (!tournament) {
                return res
                    .status(404)
                    .json({
                        status: 404,
                        message: 'The tournament not found!',
                        data: false
                    });
            };

            return res
                .status(200)
                .json({
                    status: 200,
                    message: 'Successfully read tournament!',
                    data: tournament
                });
        };

        const tournaments = await Tournament.find();


        return res
            .status(200)
            .json({
                status: 200,
                message: 'Successfully read tournament!',
                data: tournaments
            });

    } catch (error) {
        console.log(error.message);
        return next(error)
    }
};

const POST = async (req, res, next) => {
    try {

        const { tournament_name, tournament_start_date, tournament_end_date } = req?.body;

        const new_tournament = await Tournament.create({
            tournament_name,
            tournament_start_date,
            tournament_end_date,
        });

        return res
            .status(200)
            .json({
                status: 200,
                message: 'The tournament successfully created!',
                data: new_tournament
            });

    } catch (error) {
        console.log(error.message);
        return next(error);
    }
};

const DELETE = async (req, res, next) => {
    try {

        const deleted_tournament = await Tournament.findByIdAndDelete(req.params.id);

        if (!deleted_tournament) {
            return res
                .status(404)
                .json({
                    status: 404,
                    message: 'The tournament not found!',
                    data: false
                });
        };

        return res
            .status(200)
            .json({
                status: 200,
                message: 'The tournament successfully deleted!',
            });

    } catch (error) {
        console.log(error.message);
        return next(error);
    }
};

const PUT = async (req, res, next) => {
    try {

        const { tournament_name, tournament_start_date, tournament_end_date } = req?.body;

        const updated_tournament = await Tournament.findByIdAndUpdate(
            {
                _id: req.params.id
            },
            {
                $set: {
                    tournament_name,
                    tournament_start_date,
                    tournament_end_date
                }
            },
            {
                new: true,
                useFindAndModify: false
            },
        );

        return res
            .status(200)
            .json({
                status: 200,
                message: 'The tournament successfully updated!',
                data: updated_tournament
            });

    } catch (error) {
        console.log(error.message);
        return next(error);
    }
};

const ADD_PLAYER_TO_TOURNAMENT = async (req, res, next) => {
    try {

        const { playerId } = req?.body;

        const player = await Player.findById(playerId);

        if (!player) {
            return res
                .status(404)
                .json({
                    status: 404,
                    message: 'The player not found!',
                    data: false
                });
        };

        const tournament = await Tournament.findById(req.params.id);

        if (!tournament) {
            return res
                .status(404)
                .json({
                    status: 404,
                    message: "Tournament not found!",
                    data: false
                })
        };

        if (tournament.participants.includes(playerId)) {
            return res
                .status(409)
                .json({
                    status: 409,
                    message: "This player is already exists in list of players in this tournament!",
                    data: false
                })
        };

        tournament.participants.push(playerId);
        tournament.save();

        console.log(tournament);

        return res
            .status(200)
            .json({
                status: 200,
                message: 'The player successfully added to tournament!',
                data: tournament
            });


    } catch (error) {
        console.log(error.message);
        return next(error);
    }
};

const REMOVE_PLAYER_FROM_TOURNAMENT = async (req, res, next) => {
    try {

        const { playerId } = req?.body

        const player = await Player.findById(playerId);

        if (!player) {
            return res
                .status(404)
                .json({
                    status: 404,
                    message: 'The player not found!',
                    data: false
                });
        };

        const tournament = await Tournament.findById(req.params.id);

        if (!tournament) {
            return res
                .status(404)
                .json({
                    status: 404,
                    message: "Tournament not found!",
                    data: false
                })
        };

        if (!tournament.participants.includes(playerId)) {
            return res
                .status(409)
                .json({
                    status: 409,
                    message: "This player does not exists in list of players in this tournament!",
                    data: false
                })
        };

        const participants = tournament.participants.filter((el) => {
            if (el.toString() != playerId) return el
        })

        tournament.participants = participants
        tournament.save()

        return res
            .status(200)
            .json({
                status: 200,
                message: 'The player successfully removed from tournament!',
                data: tournament
            });

    } catch (error) {
        console.log(error.message);
        return next(error);
    }
}

export default {
    GET,
    POST,
    PUT,
    DELETE,
    ADD_PLAYER_TO_TOURNAMENT,
    REMOVE_PLAYER_FROM_TOURNAMENT
}