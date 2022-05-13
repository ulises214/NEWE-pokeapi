import { Pokemon } from '../../domain/Pokemon/Pokemon';

export interface PaginatedPokemonsResponse {
    count: number;
    next: string;
    previous: string;
    results: {
        name: string;
        url: string;
    }[];
}
export type PokemonDetailsResponse = Pokemon;
