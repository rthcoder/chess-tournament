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
                new error.AuthenticationError(401, "You do not have permission to access this resource.")
            )
        }

    } catch (error) {
        console.log(error.message);
        return next(error)
    }
}