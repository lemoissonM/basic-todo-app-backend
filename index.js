import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`App listening on port ${PORT}!`);
});
