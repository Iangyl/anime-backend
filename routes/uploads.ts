import express, { Request, Response } from 'express';
import uuid from 'uuid';
import path from 'path';

const router = express.Router();

router.post('/upload-cover', async (req: Request, res: Response) => {
  try {
    const { img } = req.files;
    const fileName = uuid.v4() + '.jpg';
    img.mv(path.resolve(__dirname, '..', 'static', fileName));
    await AnimeModel.create(req.body);

    res.status(200).send({ success: true });
  } catch (e: unknown) {
    console.log(e);
    res.status(401).send({ success: false, error: e });
  }
});
