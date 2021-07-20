import express from 'express';
import dotenv from 'dotenv';
import routes from './src/routes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', routes);

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`App listening on port ${PORT}!`);
});
