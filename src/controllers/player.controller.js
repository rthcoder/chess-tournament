import errors from "../utils/error.js";
import Player from "../models/player.model.js";


const GET = async (req, res, next) => {
    try {

        if (req.params.id) {
            const player = await Player.findById(req.params.id);

            if (!player) {
                return res
                    .status(404)
                    .json({
                        status: 404,
                        message: 'The player not found!',
                        data: false
                    });
            };

            return res
                .status(200)
                .json({
                    status: 200,
                    message: 'The player successfully created!',
                    data: player
                });
        };

        const players = await Player.find();


        return res
            .status(200)
            .json({
                status: 200,
                message: 'The player successfully created!',
                data: players
            });
    } catch (error) {
        console.log(error.message);
        return next(error);
    }
};

const POST = async (req, res, next) => {
    try {

        const { player_name, player_age, player_rating, country } = req?.body;

        const new_player = await Player.create({
            player_name,
            player_age,
            player_rating,
            country

        });

        return res
            .status(200)
            .json({
                status: 200,
                message: 'The player successfully created!',
                data: new_player
            });


    } catch (error) {
        console.log(error.message);
        return next(error);
    }
};

const PUT = async (req, res, next) => {
    try {

        const { player_name, player_age, player_rating, country } = req?.body;

        const updated_player = await Player.findByIdAndUpdate(
            {
                _id: req.params.id
            },
            {
                $set: {
                    player_name,
                    player_age,
                    player_rating,
                    country
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
                message: 'The player successfully updated!',
                data: updated_player
            });

    } catch (error) {
        console.log(error.message);
        return next(error);
    }
};

const DELETE = async (req, res, next) => {
    try {

        const deleted_player = await Player.findByIdAndDelete(req.params.id);

        if (!deleted_player) {
            return res
                .status(404)
                .json({
                    status: 404,
                    message: 'The player not found!',
                    data: false
                });
        };

        return res
            .status(200)
            .json({
                status: 200,
                message: 'The player successfully deleted!',
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

