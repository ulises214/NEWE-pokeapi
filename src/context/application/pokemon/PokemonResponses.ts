import { Pokemon } from '../../domain/Pokemon/Pokemon';
export interface PaginatedPokemonsResult {
    name: string;
    url: string;
}
export interface PaginatedPokemonsResponse {
    count: number;
    next: string;
    previous: string;
    results: PaginatedPokemonsResult[];
}
export type PokemonDetailsResponse = Pokemon;
