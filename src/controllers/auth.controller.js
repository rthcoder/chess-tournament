import bcrypt from "bcryptjs";
import erros from "../utils/error.js";
import User from "../models/user.model.js";
import JWT from "../services/JWT.service.js";

const REISTER = async (req, res, next) => {
    try {

        const { username, password } = req?.body

    } catch (error) {
        console.log(error.message);
        return next(error)
    }
}
const LOGIN = async (req, res, next) => {
    try {

    } catch (error) {
        console.log(error.message);
        return next(error)
    }
}

export default {
    REISTER,
    LOGIN
}