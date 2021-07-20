import models from '../models';

const { Task } = models;

export default class TaskController {
  static async create({ body }, res) {
    const result = await Task.create({
      ...body,
    });
    return res.status(201).json({
      status: 201,
      message: 'Task created',
      data: result,
    });
  }

  static async get({ query: { limit = 10, offset = 0 } }, res) {
    const result = await Task.findAll({
      where: { deletedAt: null },
      limit,
      offset,
    });
    return res.status(200).json({
      status: 200,
      message: 'Task',
      data: result,
    });
  }

  static async getOne({ params: { taskId } }, res) {
    const result = await Task.findAll({
      where: { id: taskId, deletedAt: null },
    });
    return res.status(201).json({
      status: 201,
      message: 'Task',
      data: result,
    });
  }

  static async update({ body, params: { taskId } }, res) {
    const updated = await Task.update(body, {
      where: { id: taskId },
      returning: true,
      plain: true,
    });
    return res.status(200).json({
      status: 200,
      message: 'Task updated',
      data: updated[1],
    });
  }

  static async delete({ params: { taskId } }, res) {
    await Task.update(
      { deletedAt: new Date() },
      { where: { id: taskId } },
    );
    return res.status(200).json({
      status: 200,
      message: 'Task deleted',
    });
  }
}
