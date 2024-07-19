import { ValidationError } from "../utils/error.js"
import validation from "../utils/validation.util.js"

export default (req, res, next) => {
    try {

        if (req.method === 'POST' && req.url == '/api/v1/auth/login') {
            const { error } = validation.userValidation.validate({ body: req.body })

            if (error) {
                return next(
                    new error.ValidationError()
                )
            }
        }

        return next()


    } catch (error) {
        return next(new ValidationError(400, error.message))
    }
}