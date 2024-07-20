import { Router } from 'express';
import isAdmin from "../middlewares/isAdmin.middleware.js";
import checkToken from "../middlewares/checkToken.middeware.js";
import match from "../controllers/match.controller.js"

const router = Router();

router.get('/api/v1/match', checkToken, match.GET);
router.get('/api/v1/match/:id', checkToken, match.GET);
router.post('/api/v1/match/:id', checkToken, isAdmin, match.updateMatch);

export default router;