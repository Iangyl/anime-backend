import express from 'express';
import home from './routes/home';

const app = express();

app.use('/', home);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`App listening to PORT: ${port}`));
