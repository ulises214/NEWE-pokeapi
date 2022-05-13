import { PokemonRepository } from '../../application/pokemon/PokemonRepository';
import { PaginatedPokemonsResponse } from '../../application/pokemon/PokemonResponses';
import { RepositoryResponse } from '../../application/RepositoryResponse';
import { Pokemon } from '../../domain/Pokemon/Pokemon';

export class ApiPokemonRepository extends PokemonRepository {
    readonly #baseUrl = 'https://pokeapi.co/api/v2/';
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
        try {
            const response = await fetch(url);
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
}
