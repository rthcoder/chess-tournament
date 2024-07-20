import { Router } from 'express';
import auth from "../controllers/auth.controller.js";
import validation from "../middlewares/JOI.validation.js";
import isAdmin from "../middlewares/isAdmin.middleware.js";
import checkToken from "../middlewares/checkToken.middeware.js";

const router = Router();

router.post('/api/v1/auth/login', auth.LOGIN);
router.post('/api/v1/auth/register', validation, auth.REGISTER);
router.patch('/api/v1/addadmin/:id', checkToken, isAdmin, auth.ADD_ADMIN)
router.patch('/api/v1/removeadmin/:id', checkToken, isAdmin, auth.REMOVE_ADMIN)

export default router;