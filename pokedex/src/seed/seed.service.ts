import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interfaces';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SeedService {

  private readonly axios: AxiosInstance = axios;

  constructor(
    @InjectModel( Pokemon.name )
    private readonly pokemonModel: Model<Pokemon>,
  ) {}

  async executeSEED() {

    await this.pokemonModel.deleteMany({}) // delete all pokemons

    const { data } = await this.axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=10')

    const insertPromisesArray = []
    data.results.forEach(async ({ name, url }) => {
      const segments = url.split('/')
      const no = +segments[ segments.length - 2 ]

      insertPromisesArray.push( 
        this.pokemonModel.create({ name, no }) 
        );
    });
    await this.pokemonModel.insertMany(insertPromisesArray)
    return 'insert seed';
  }
}
