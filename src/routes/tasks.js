import express from 'express';
import { create, update } from '../validators/task';
import TaskController from '../controllers/task';
import joiValidator from '../middlewares/joiValidator';

const app = express.Router();

app.post('/', joiValidator(create), TaskController.create);
app.get('/', TaskController.get);
app.get('/:id', TaskController.getOne);
app.put('/:id', joiValidator(update), TaskController.update);
app.delete('/:id', TaskController.delete);

export default app;
