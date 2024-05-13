import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
import { Dogs } from './dog.entiy';
import { updateDogDto } from './dto/dog.dto';

@Injectable()
export class DogsService {
  private dogs: Dogs[] = [
    {
      id: '1',
      name: 'peter',
      raza: 'pug',
    },
  ];

  getAllDogs() {
    return this.dogs;
  }

  getOneDogs(id: string): Dogs {
    return this.dogs.find((dog) => dog.id === id);
  }

  createDogs(name: string, raza: string) {
    const dog = {
      id: v4(),
      name,
      raza,
    };
    this.dogs.push(dog);
    return dog;
  }

  deleteDogs(id: string) {
    this.dogs = this.dogs.filter((dog) => dog.id === id);
  }

  updateDogs(id: string, updateField: updateDogDto): Dogs {
    const dog = this.getOneDogs(id);
    const newDog = Object.assign(dog, updateField);
    this.dogs = this.dogs.map((dog) => (dog ? newDog : dog));
    return newDog;
  }
}
