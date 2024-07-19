import { Router } from 'express';
import auth from "../controllers/auth.controller.js";
import validation from "../middlewares/JOI.validation.js";

const router = Router();

router.post('/api/v1/auth/login', auth.LOGIN);
router.post('/api/v1/auth/register', validation, auth.REGISTER);

export default router;