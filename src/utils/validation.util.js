import JOI from "joi";

const userValidation = JOI.object({
    body: JOI.object({
        username: JOI.string().required().min(3).max(25).alphanum(),
        password: JOI.string().required().min(6).max(8)
    })
});

const tournamentValidation = JOI.object({
    body: JOI.object({
        tournament_name: JOI.string().required().min(5).max(30).alphanum(),
        tournament_start_date: JOI.date().required(),
        tournament_end_date: JOI.date().required()
    })
});

const playerValidation = JOI.object({
    body: JOI.object({

        player_name: JOI.string().required().min(10).max(40).alphanum(),
        player_age: JOI.number().required(),
        player_rating: JOI.number().required(),
        country: JOI.string().min(3).max(50)
    })
});

const matchValidation = JOI.object({
    body: JOI.object({
        tournament: JOI.string().required(),
        round: JOI.number().required(),
        player1: JOI.string().required(),
        player2: JOI.string().required(),
        result: JOI.string().required()
    })
});

const leaderBoardValidation = JOI.object({
    body: JOI.object({
        tournament: JOI.string().required(),
        player: JOI.string().required(),
        points: JOI.number().required(),
        rank: JOI.number().required(),
    })
});

export default {
    userValidation,
    tournamentValidation,
    playerValidation,
    matchValidation,
    leaderBoardValidation
}