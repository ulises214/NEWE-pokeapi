import { PokemonRepository } from '../../application/pokemon/PokemonRepository';
import { PaginatedPokemonsResponse } from '../../application/pokemon/PokemonResponses';
import { RepositoryResponse } from '../../application/RepositoryResponse';
import { Pokemon } from '../../domain/Pokemon/Pokemon';
import { MemoryPokemonRepository } from './MemoryPokemonRepository';

export class ApiPokemonRepository extends PokemonRepository {
    readonly #baseUrl = 'https://pokeapi.co/api/v2/';
    readonly #cache = new MemoryPokemonRepository();
    async getPaginated(
        offset: number,
    ): RepositoryResponse<PaginatedPokemonsResponse> {
        try {
            const options = new URLSearchParams();
            options.set('offset', offset.toString());
            options.set('limit', '10');
            const response = await fetch(`${this.#baseUrl}pokemon?${options}`);
            return {
                status: true,
                data: await response.json(),
            };
        } catch (error) {
            return {
                status: false,
                reason: error instanceof Error ? error.message : String(error),
            };
        }
    }
    async getPokemonDetail(url: string): RepositoryResponse<Pokemon> {
        const cache = await this.#cache.getPokemonDetail(url);
        if (cache.status) return cache;
        try {
            const response = await fetch(url);

            const data = (await response.json()) as Pokemon;
            this.#cache.setPokemon(url, data);
            return {
                status: true,
                data,
            };
        } catch (error) {
            return {
                status: false,
                reason: error instanceof Error ? error.message : String(error),
            };
        }
    }
}
