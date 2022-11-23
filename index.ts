import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import fileUpload from 'express-fileupload';
import routes from './routes/index';

dotenv.config();

async function main() {
  const port = process.env.PORT || 3001;
  const password = process.env.MONGO_DB_PWD;

  await mongoose.connect(
    `mongodb+srv://volodymyr_knu:${password}@cluster0.mjj1hej.mongodb.net/?retryWrites=true&w=majority`
  );

  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.resolve(__dirname, 'static')));
  app.use(fileUpload({}));
  app.use('/v1', routes);

  app.listen(port, () => console.log(`App listening to PORT: ${port}`));
}

main().catch((err) => console.log(err));
