import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BrandsService } from 'src/brands/brands.service';
import { BRANDS_SEED } from './data/brand.seed';

@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}

  populeteDB() {
    this.carsService.firstCarsWithSeedDate( CARS_SEED );
    this.brandsService.firstCarsWithSeedDate( BRANDS_SEED );
    return 'Seed executed'
  }
}
