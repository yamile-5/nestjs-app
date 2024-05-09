import { Injectable } from '@nestjs/common';
import { Tasks, TaskStatus } from './task.entiy';
import { v4 } from 'uuid';

@Injectable()
export class TasksService {
  // simula la base de datos
  private takes: Tasks[] = [
    {
      id: '1',
      title: 'primer tarea',
      description: 'alguna tarea',
      status: TaskStatus.PENDING,
    },
  ];

  getAllTaks() {
    return this.takes;
  }
  createTaks(title: string, description: string) {
    const task = {
      id: v4(),
      title,
      description,
      status: TaskStatus.PENDING,
    };
    this.takes.push(task);
    return task;
  }
  updateTaks() {}
  deleteTaks() {}
}
