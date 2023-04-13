import { Injectable, NotFoundException } from '@nestjs/common';
import { Cars } from './interfaces/cars.interface';
import { v4 as uuid } from 'uuid'

@Injectable()
export class CarsService {

    private cars: Cars[] = [
      {
        id: uuid(),
        brand: 'Honda',
        model: 'Civic'
      },
      {
        id: uuid(),
        brand: 'Toyota',
        model: 'Civic'
      },
      {
        id: uuid(),
        brand: 'Jeep',
        model: 'Civic'
      }
    ]

    findAll() {
        return this.cars;
    }

    findOneById( id: string ) {
        let car = this.cars.find( (car) => car.id == id);

        if ( !car ){
            throw new NotFoundException(`Car with id: '${id}' not found`);
        }

        return car;
    }
}
