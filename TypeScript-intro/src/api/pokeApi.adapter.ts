import axios from "axios";

/**substitution principle */
/**Interface prevents the used method from being seen */
export interface HttpAdapter {

    get<T> ( url: string ): Promise<T>;
}

export class PokeApiFetchAdapter implements HttpAdapter {
    async get<T>( url: string ): Promise<T> {
        const resp = await fetch( url );
        const data: T = await resp.json();

        return data;
    }
}

/**Adapter is created for to adapt third party code */
/**For solid principles */
export class PokeApiAdapter implements HttpAdapter {

    private readonly axios = axios;//'https://pokeapi.co/api/v2/pokemon/4'

    async get<T>(url: string): Promise<T>{
        const { data } = await this.axios.get<T>(url);        
        return data;
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