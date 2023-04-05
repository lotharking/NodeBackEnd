import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
      {
        id: 1,
        brand: 'Honda',
        model: 'Civic'
      },
      {
        id: 2,
        brand: 'Toyota',
        model: 'Civic'
      },
      {
        id: 3,
        brand: 'Jeep',
        model: 'Civic'
      }
    ]

    findAll() {
        return this.cars;
    }

    findOneById( id: number ) {
        let car = this.cars.find( (car) => car.id == id);

        if ( !car ){
            throw new NotFoundException(`Car with id: '${id}' not found`);
        }

        return car;
    }
}
