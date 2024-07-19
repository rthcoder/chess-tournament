import error from "../utils/error.js"
import User from "../models/user.model.js";

export default async function (req, res, next) {
    try {

        const user = await User.findById(req.user_id)

        if (user.is_admin) {
            next()
        }
        else {
            return next(
                new error.AuthenticationError("You do not have permission to access this resource.")
            )
        }

    } catch (error) {
        return next(
            new error.AuthenticationError(403, error.message)
        );
    }
}