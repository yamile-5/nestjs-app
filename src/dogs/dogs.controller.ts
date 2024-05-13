import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DogsService } from './dogs.service';
import { createDogsDto, updateDogDto } from './dto/dog.dto';

@Controller('dogs')
export class DogsController {
  constructor(private dogService: DogsService) {}

  @Get()
  getAllDogs() {
    return this.dogService.getAllDogs();
  }

  @Get(':id')
  getOneDogs(@Param('id') id: string) {
    return this.dogService.getOneDogs(id);
  }

  @Post()
  createDog(@Body() newDogs: createDogsDto) {
    return this.dogService.createDogs(newDogs.name, newDogs.raza);
  }

  @Delete(':id')
  deleteDogs(@Param('id') id: string) {
    this.dogService.deleteDogs(id);
  }

  @Patch(':id')
  updateDog(@Param('id') id: string, @Body() updateFields: updateDogDto) {
    this.dogService.updateDogs(id, updateFields);
  }
}
