import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseFilters,
  Query,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { MongoExceptionFilter } from './filter/mongoExceptions.filter';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id.pipe';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  @UseFilters(MongoExceptionFilter)
  create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonService.create(createPokemonDto);
  }
  
  @Get()
  findAll( @Query() paginationDTO: PaginationDto ) {
    return this.pokemonService.findAll( paginationDTO );
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pokemonService.findOne( id );
  }
  
  @Patch(':id')
  @UseFilters(MongoExceptionFilter)
  update(@Param('id') id: string, @Body() updatePokemonDto: UpdatePokemonDto) {
    return this.pokemonService.update(id, updatePokemonDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseMongoIdPipe ) id: string) {
    return this.pokemonService.remove(id);
  }
}
