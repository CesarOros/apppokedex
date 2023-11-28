import { PokemonResponse } from "../types/pokemonTypes";

export async function getPokemons(nextPokemon: string): Promise<PokemonResponse>{
    return await fetch(nextPokemon)
    .then(response => response.json())
    .catch((e)=> {throw e  }) 
}

export async function getPokemonDetailsByUrl(url: string): Promise<any> {
    return await fetch(url)
    .then(response => response.json())
    .catch((e)=> {throw e }) 
}