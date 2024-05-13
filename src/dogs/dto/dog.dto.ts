import { IsOptional, IsString } from 'class-validator';

export class createDogsDto {
  @IsString()
  name: string;
  raza: string;
}

export class updateDogDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  raza?: string;
}
