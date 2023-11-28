export interface PokemonResponse {
    count: string;
    next: string;
    previous: string;
    results: Results[];
}

export interface Results {
    name: string;
    url: string;
}

export interface Types {
    type: Type 
}

export interface Type {
    name: string;
    url: string;
}

export interface Stat {
    name: string;
}

export interface Stats {
    base_stat: number;
    stat: Stat;
}

export interface PokemonData {
    id: number;
    name: string;
    type: string;
    order: number;
    image: string;
    types: Types[];
    sprites?: any;
    weight: number ;
    height: number ;
    moves: any;
    stats: Stats[]
}