import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(private readonly carsservice: CarsService) {}

    @Get()
    getAllCars() {
        return this.carsservice.findAll();
    }

    @Get(':id')
    getCarById( @Param('id') id: string ){
        return this.carsservice.findOneById( Number(id) );
    }

}
