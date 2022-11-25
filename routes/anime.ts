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

router.get('/:id', async (req: Request, res: Response) => {
  try {
    AnimeModel.findById(req.params.id)
      .then((data) => {
        res.status(200).send({ success: true, data });
      })
      .catch(async () => {
        AnimeModel.findOne({ title: req.params.id })
          .then((data) => {
            res.status(200).send({ success: true, data });
          })
          .catch(() => {
            throw Error("The anime doesn't exist!");
          });
      });
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

router.patch('/edit/:id', async (req: Request, res: Response) => {
  try {
    AnimeModel.findByIdAndUpdate(req.params.id, { ...req.body })
      .then(() => {
        res.status(200).send({ success: true });
      })
      .catch(() => {
        AnimeModel.updateOne({ title: req.params.id }, { ...req.body })
          .then(() => {
            res.status(200).send({ success: true });
          })
          .catch(() => {
            throw Error("The anime doesn't exist!");
          });
      });
  } catch (e: unknown) {
    console.log(e);
    res.status(401).send({ success: false, message: e });
  }
});

router.delete('/delete/:id', async (req: Request, res: Response) => {
  try {
    AnimeModel.findByIdAndDelete(req.params.id)
      .then(() => {
        res.status(200).send({ success: true });
      })
      .catch(() => {
        AnimeModel.deleteOne({ title: req.params.id })
          .then(() => {
            res.status(200).send({ success: true });
          })
          .catch(() => {
            throw Error("The anime doesn't exist!");
          });
      });
  } catch (e: unknown) {
    console.log(e);
    res.status(401).send({ success: false, message: e });
  }
});

export default router;
