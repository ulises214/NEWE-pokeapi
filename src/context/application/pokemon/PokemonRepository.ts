import { RepositoryResponse } from '../RepositoryResponse';
import {
    PaginatedPokemonsResponse,
    PokemonDetailsResponse,
} from './PokemonResponses';

export abstract class PokemonRepository {
    abstract getPaginated(
        offset: number,
    ): RepositoryResponse<PaginatedPokemonsResponse>;
    abstract getPokemonDetail(
        url: string,
    ): RepositoryResponse<PokemonDetailsResponse>;
}
