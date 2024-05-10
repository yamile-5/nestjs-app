import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createTaksDto, updateTakDto } from './dto/tast.dto';

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

  @Delete(':id')
  deleteTasks(@Param('id') id: string) {
    this.tasksService.deleteTaks(id);
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() updateFields: updateTakDto) {
    this.tasksService.updateTaks(id, updateFields);
  }
}
