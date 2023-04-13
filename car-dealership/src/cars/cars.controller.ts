import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
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
        return this.carsservice.findOneById( id );
    }

    @Post()
    createCar(@Body() payload: any) {
        return payload;
    }

    @Patch(':id')
    updateCar(
        @Param('id', ParseIntPipe) id: number,
        @Body() payload: any) {
        return payload;
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseIntPipe) id: number) {
        return {msg: 'delete id'};
    }

}
