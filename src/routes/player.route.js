import { Router } from 'express';
import player from "../controllers/player.controller.js";
import validation from "../middlewares/JOI.validation.js";
import isAdmin from "../middlewares/isAdmin.middleware.js";
import checkToken from "../middlewares/checkToken.middeware.js";

const router = Router();

router.get('/api/v1/player', checkToken, isAdmin, player.GET);
router.get('/api/v1/player/:id', checkToken, isAdmin, player.GET);
router.post('/api/v1/player', validation, checkToken, isAdmin, player.POST);
router.put('/api/v1/player/:id', checkToken, isAdmin, player.PUT);
router.delete('/api/v1/player/:id', checkToken, isAdmin, player.DELETE);

export default router;