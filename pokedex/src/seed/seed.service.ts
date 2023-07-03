import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interfaces';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {

  constructor(
    @InjectModel( Pokemon.name )
    private readonly pokemonModel: Model<Pokemon>,

    private readonly http: AxiosAdapter,
  ) {}

  async executeSEED() {

    await this.pokemonModel.deleteMany({}) // delete all pokemons

    const data = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=10')

    // const insertPromisesArray = []
    const pokemonToInsert: { name: string, no: number } [] = []
    data.results.forEach(async ({ name, url }) => {
      const segments = url.split('/')
      const no = +segments[ segments.length - 2 ]

      pokemonToInsert.push({ name, no });
      // insertPromisesArray.push( 
      //   this.pokemonModel.create({ name, no }) 
      //   );
    });
    await this.pokemonModel.insertMany(pokemonToInsert)
    return 'insert seed';
  }
}
