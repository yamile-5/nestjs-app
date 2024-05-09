import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createTaksDto } from './dto/tast.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTaks() {
    return this.tasksService.getAllTaks();
  }

  @Post()
  createTask(@Body() newTasks: createTaksDto) {
    return this.tasksService.createTaks(newTasks.title, newTasks.description);
  }
}
