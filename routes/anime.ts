import express, { Request, Response } from 'express';
import AnimeModel from '../models/anime';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const result = await AnimeModel.find();

    res.status(200).send({ success: true, data: result });
  } catch (e: unknown) {
    console.log(e);
    res.status(401).send({ success: false, message: e });
  }
});

router.get('/', async (req: Request, res: Response) => {
  try {
    const result = await AnimeModel.findById(req.query.id);

    res.status(200).send({ success: true, data: result });
  } catch (e: unknown) {
    console.log(e);
    res.status(401).send({ success: false, message: e });
  }
});

router.post('/add', async (req: Request, res: Response) => {
  try {
    await AnimeModel.create(req.body);

    res.status(200).send({ success: true });
  } catch (e: unknown) {
    console.log(e);
    res.status(401).send({ success: false, message: e });
  }
});

router.patch('/edit', async (req: Request, res: Response) => {
  try {
    await AnimeModel.updateOne({
      id: req.query.id,
      ...req.body,
    });

    res.status(200).send({ success: true });
  } catch (e: unknown) {
    console.log(e);
    res.status(401).send({ success: false, message: e });
  }
});

router.delete('/delete', async (req: Request, res: Response) => {
  try {
    await AnimeModel.deleteOne({
      id: req.query.id,
    });

    res.status(200).send({ success: true });
  } catch (e: unknown) {
    console.log(e);
    res.status(401).send({ success: false, message: e });
  }
});

export default router;
