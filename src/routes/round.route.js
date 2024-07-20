import { Router } from 'express';
import isAdmin from "../middlewares/isAdmin.middleware.js";
import checkToken from "../middlewares/checkToken.middeware.js";
import round from "../controllers/round.controller.js"

const router = Router();

router.post('/api/v1/match/:id/:roundNumber', checkToken, isAdmin, round.generateNewRoundPairings);

export default router;