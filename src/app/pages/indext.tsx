import { FC, useContext, useEffect, useState } from 'react';
import { PaginatedPokemonsResponse } from '../../context/application/pokemon/PokemonResponses';
import { OptionalRepositoryResult } from '../../context/application/RepositoryResponse';
import { PokemonsList } from '../pokemons/components/organisms/PokemonsList';
import { PokemonRepositoryContext } from '../providers/PokemonRepository';

export const IndexPage: FC = () => {
    const pokeRepo = useContext(PokemonRepositoryContext);
    const [paginatedResponse, setPaginatedResponse] =
        useState<OptionalRepositoryResult<PaginatedPokemonsResponse>>(
            undefined,
        );
    const [pokeOffset, setPokeOffset] = useState(10);
    useEffect(() => {
        const fetchPaginatedPokemons = async (): Promise<void> => {
            const response = await pokeRepo.getPaginated(pokeOffset);
            setPaginatedResponse(response);
        };
        fetchPaginatedPokemons();
    }, [pokeOffset]);
    return (
        <main className="container flex items-center justify-center py-8 mx-auto">
            {!paginatedResponse ? (
                <div>Loading...</div>
            ) : paginatedResponse.status ? (
                <PokemonsList results={paginatedResponse.data.results} />
            ) : (
                paginatedResponse.reason
            )}
        </main>
    );
};
