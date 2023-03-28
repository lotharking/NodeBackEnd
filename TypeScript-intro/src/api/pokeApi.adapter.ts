import axios from "axios";

/**Adapter is created for to adapt third party code */
/**For solid principles */
export class PokeApiAdapter {

    private readonly axios = axios;//'https://pokeapi.co/api/v2/pokemon/4'

    async get(url: string){
        const { data } = await this.axios.get(url);        
        return data.moves;
    }
    
    async post(url: string, data: any){
        return;
    }

    async patch(url: string, data: any){
        return;
    }

    async delete(url: string){
        return;
    }
}