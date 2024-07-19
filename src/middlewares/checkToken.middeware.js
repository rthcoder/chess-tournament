import errors from "../utils/error.js";
import User from "../models/user.model.js";
import JWT from "../services/JWT.service.js";

export default async function (req, res, next) {
    try {
        let { token } = req.headers;

        if (!token) {
            return next(
                new errors.AuthorizationError(400, 'User is un authorized')
            )
        };

        let users = await User.find();

        const { user_id, agent, ip } = JWT.verify(token);

        if (!(req.headers['user-agent'] == agent)) {
            return next(
                new errors.AuthorizationError(400, 'Token is invalid')
            )
        };

        if (!(req.headers['x-forwarded-for'] || req.socket.remoteAddress == ip)) {
            return next(
                new errors.AuthorizationError(400, 'Token is invalid')
            )
        };

        const user = users.some(user => user._id == user_id);

        if (!user) {
            return next(
                new errors.AuthorizationError(400, 'The token invalid')
            )
        };

        req.user_id = user_id;

        next();
    } catch (error) {
        return next(
            new errors.AuthorizationError(400, error.message)
        );
    }
};