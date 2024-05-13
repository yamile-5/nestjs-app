import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { DogsModule } from './dogs/dogs.module';
import { DogsController } from './dogs/dogs.controller';
import { DogsService } from './dogs/dogs.service';
//import { DogsControllerTsController } from './dogs.controller.ts/dogs.controller.ts.controller';

@Module({
  imports: [TasksModule, DogsModule],
  controllers: [DogsController],
  providers: [DogsService],
})
export class AppModule {}
