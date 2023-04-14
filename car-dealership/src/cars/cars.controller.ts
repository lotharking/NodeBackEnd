import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { create } from 'domain';
import { UpdateCarDto } from './dto/update-car.dto';

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
        return this.carsservice.create( createCarDto );
    }

    @Patch(':id')
    updateCar(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateCarDto: UpdateCarDto) {
        return updateCarDto;
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseIntPipe) id: number) {
        return {msg: 'delete id'};
    }

}
