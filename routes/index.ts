import { Router } from 'express';
import anime from './anime';
import uploads from './uploads';

const router = Router();

router.use('/anime', anime);
router.use('/upload', uploads);

export default router;
