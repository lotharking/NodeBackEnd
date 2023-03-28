import axios from 'axios';

export class Pokemon {

    constructor(
        public id: number, 
        public name: string) {}
    
    /**Method Async for promise */
    async getmoves(){
        //await -> wait the response from the api
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data.moves);

        return data.moves;
    }
}

export const charmander = new Pokemon(4, 'Charmander');

