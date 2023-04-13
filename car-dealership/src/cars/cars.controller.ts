import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { create } from 'domain';

@Controller('cars')
export class CarsController {

    constructor(private readonly carsservice: CarsService) {}

    @Get()
    getAllCars() {
        return this.carsservice.findAll();
    }

    @Get(':id')
    getCarById( @Param('id', ParseUUIDPipe) id: string ){
        return this.carsservice.findOneById( id );
    }

    @Post()
    createCar(@Body() createCarDto: CreateCarDto) {
        return createCarDto;
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
