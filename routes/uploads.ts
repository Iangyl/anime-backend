import express, { Request, Response } from 'express';
import { v4 } from 'uuid';
import path from 'path';
import { UploadedFile } from 'express-fileupload';

const router = express.Router();

router.post('/cover', async (req: Request, res: Response) => {
  try {
    if (!req.files) {
      res.status(401).send({
        success: false,
        message: 'No file uploaded',
      });
    } else {
      const img: UploadedFile = req.files!.img as UploadedFile;
      const fileId = v4();
      const fileName = fileId + `.${img.mimetype.split('/')[1]}`;
      img.mv(path.resolve(__dirname, '..', 'static', fileName));

      res.status(200).send({ success: true, data: fileId });
    }
  } catch (e: unknown) {
    if (typeof e === 'string') {
      res.status(401).send({ success: false, message: e });
    } else if (e instanceof Error) {
      res.status(401).send({ success: false, message: e.message });
    }
  }
});

export default router;
