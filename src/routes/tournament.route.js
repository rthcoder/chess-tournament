import { Router } from 'express';
import validation from "../middlewares/JOI.validation.js";
import isAdmin from "../middlewares/isAdmin.middleware.js";
import checkToken from "../middlewares/checkToken.middeware.js";
import tournament from "../controllers/tournament.controller.js";

const router = Router();

router.get('/api/v1/tournament', checkToken, tournament.GET);
router.get('/api/v1/tournament/:id', checkToken, tournament.GET);
router.post('/api/v1/tournament', validation, checkToken, isAdmin, tournament.POST);
router.put('/api/v1/tournament/:id', checkToken, isAdmin, tournament.PUT);
router.delete('/api/v1/tournament/:id', checkToken, isAdmin, tournament.DELETE);
router.patch('/api/v1/tournament/:id/addplayer', checkToken, isAdmin, tournament.ADD_PLAYER);

export default router;