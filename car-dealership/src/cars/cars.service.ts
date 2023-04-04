import { Injectable } from '@nestjs/common';

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
        let index = this.cars.find( (car) => car.id == id);
        return index;
    }
}
