import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Model, isValidObjectId } from 'mongoose';
import { Pokemon } from './entities/pokemon.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PokemonService {

  constructor(
    @InjectModel( Pokemon.name )
    private readonly pokemonModel: Model<Pokemon>,
  ) {}
  async create(createPokemonDto: CreatePokemonDto) {
    createPokemonDto.name = createPokemonDto.name.toLowerCase()

    const pokemon = await this.pokemonModel.create( createPokemonDto )
    return pokemon;
  }

  findAll() {
    return `This action returns all pokemon`;
  }

  async findOne(id: string) {
    let pokemon: Pokemon;

    if( !isNaN(+id)){
      pokemon = await this.pokemonModel.findOne({ no:id })
    }

    // valida id mongo
    if( !pokemon && isValidObjectId( id )) pokemon = await this.pokemonModel.findById( id );
    
    // Name
    if( !pokemon ) pokemon = await this.pokemonModel.findOne({ name: id.toLowerCase().trim() })
    
    if( !pokemon ) throw new NotFoundException(`Pokemon with id: ${id}, not found`)

    return pokemon;
  }

  async update(id: string, updatePokemonDto: UpdatePokemonDto) {
    const pokemon = await this.findOne( id );

    if( updatePokemonDto.name ) updatePokemonDto.name = updatePokemonDto.name.toLowerCase()

    await pokemon.updateOne( updatePokemonDto, { new: true } )
    return { ...pokemon.toJSON(), ...updatePokemonDto, };
  }

  async remove(id: string) {
    const pokemon = await this.findOne( id );
    await pokemon.deleteOne();
    // return id;
  }
}
