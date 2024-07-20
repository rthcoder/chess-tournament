import errors from "../utils/error.js";
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

export default {
    GET,
    POST,
    PUT,
    DELETE
}