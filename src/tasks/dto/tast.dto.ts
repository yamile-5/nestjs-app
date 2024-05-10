import { TaskStatus } from '../task.entiy';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsIn,
  MinLength,
} from 'class-validator';

export class createTaksDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  title: string;

  description: string;
}

export class updateTakDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  deescription?: string;

  @IsString()
  @IsOptional()
  @IsIn([TaskStatus.PENDING, TaskStatus.IN_PROGRESS, TaskStatus.DONDE])
  status?: TaskStatus;
}
