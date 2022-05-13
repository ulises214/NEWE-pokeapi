import { PokemonRepository } from '../../application/pokemon/PokemonRepository';
import { PaginatedPokemonsResponse } from '../../application/pokemon/PokemonResponses';
import { RepositoryResponse } from '../../application/RepositoryResponse';
import { Pokemon } from '../../domain/Pokemon/Pokemon';
export class MemoryPokemonRepository extends PokemonRepository {
    readonly #pokemons: [string, Pokemon][] = [];
    getPaginated(
        offset: number,
    ): RepositoryResponse<PaginatedPokemonsResponse> {
        throw new Error('Method not implemented.' + offset);
    }
    setPokemon(url: string, pokemon: Pokemon): void {
        this.#pokemons.push([url, pokemon]);
    }
    async getPokemonDetail(url: string): RepositoryResponse<Pokemon> {
        const pokemon = this.#pokemons.find((p) => p[0] === url);
        if (pokemon) return { status: true, data: pokemon[1] };
        return { status: false, reason: 'Pokemon not found' };
    }
}
