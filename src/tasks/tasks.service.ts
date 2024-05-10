import { Injectable } from '@nestjs/common';
import { Tasks, TaskStatus } from './task.entiy';
import { v4 } from 'uuid';
import { updateTakDto } from './dto/tast.dto';

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
  //borra una tarea
  deleteTaks(id: string) {
    this.takes = this.takes.filter((take) => take.id !== id);
  }
  //busca tara por id
  getTaskByid(id: string): Tasks {
    return this.takes.find((take) => take.id === id);
  }
  //edita
  updateTaks(id: string, updateFields: updateTakDto): Tasks {
    const task = this.getTaskByid(id);
    const newTask = Object.assign(task, updateFields);
    this.takes = this.takes.map((task) => (task.id === id ? newTask : task));
    return newTask;
  }
}
