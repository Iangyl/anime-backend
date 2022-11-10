import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import home from './routes/home';

dotenv.config();

async function main() {
  const port = process.env.PORT || 3001;
  const password = process.env.MONGO_DB_PWD;

  await mongoose.connect(
    `mongodb+srv://volodymyr_knu:${password}@cluster0.mjj1hej.mongodb.net/?retryWrites=true&w=majority`
  );

  const app = express();

  app.use('/', home);

  app.listen(port, () => console.log(`App listening to PORT: ${port}`));
}

main().catch((err) => console.log(err));
