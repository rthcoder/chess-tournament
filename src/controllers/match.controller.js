import Match from "../models/match.model.js";

const GET = async (req, res, next) => {
    try {

        if (req.params.id) {
            const match = await Match.findById(req.params.id);

            if (!match) {
                return res
                    .status(404)
                    .json({
                        status: 404,
                        message: 'The match not found!',
                        data: false
                    });
            };

            return res
                .status(200)
                .json({
                    status: 200,
                    message: 'Successfully read match!',
                    data: match
                });
        };

        const matchs = await Match.find();


        return res
            .status(200)
            .json({
                status: 200,
                message: 'Successfully read matchs!',
                data: matchs
            });


    } catch (error) {
        console.log(error.message);
        return next(error)
    }
}

const updateMatch = async (req, res, next) => {
    try {

        const id = req.params.id;
        const { result } = req.body;

        if (!['player1', 'player2', 'draw'].includes(result)) {
            return res
                .status(400)
                .json({
                    status: 400,
                    message: 'Invalid result value!',
                    data: false
                });
        }

        const match = await Match.findByIdAndUpdate(id, { result }, { new: true });

        if (!match) {
            return res
                .status(404)
                .json({
                    status: 404,
                    message: 'Match not found!',
                    data: false
                });
        }

        return res
            .status(200)
            .json({
                status: 200,
                message: 'succes!',
                data: match
            });

    } catch (error) {
        console.log(error.message);
        return next(error)
    }
};

export default {
    updateMatch,
    GET
};