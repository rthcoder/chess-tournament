import errors from "../utils/error.js"
import validation from "../utils/validation.util.js"

export default (req, res, next) => {
    try {

        if (req.method === 'POST' && req.url == '/api/v1/auth/register') {
            const { error } = validation.userValidation.validate({ body: req.body })

            if (error) {
                return next(
                    new errors.ValidationError(400, error.message)
                )
            }
        }

        if (req.method === 'POST' && req.url == '/api/v1/player') {
            const { error } = validation.playerValidation.validate({ body: req.body })

            if (error) {
                return next(
                    new errors.ValidationError(400, error.message)
                )
            }
        }

        return next()


    } catch (error) {
        console.log(error.message);
        return next(error)
    }
}