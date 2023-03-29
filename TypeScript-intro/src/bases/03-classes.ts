import axios from 'axios';
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';

export class Pokemon {

    constructor(
        public id: number, 
        public name: string) {}
    
    /**Method Async for promise */
    async getmoves(): Promise<Move[]>{
        //await -> wait the response from the api
        const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data.moves);

        return data.moves;
    }
}

export const charmander = new Pokemon(4, 'Charmander');

console.log( charmander.getmoves() );