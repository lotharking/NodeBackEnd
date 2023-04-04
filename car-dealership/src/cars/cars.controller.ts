import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(private readonly carsservice: CarsService) {}

    @Get()
    getAllCars() {
        return this.carsservice.findAll();
    }

    @Get(':id')
    getCarById( @Param('id', ParseIntPipe) id: number ){
        return this.carsservice.findOneById( id );
    }

}
