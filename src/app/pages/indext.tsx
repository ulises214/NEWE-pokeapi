import { FC, useContext, useEffect, useState } from 'react';
import { PaginatedPokemonsResponse } from '../../context/application/pokemon/PokemonResponses';
import { OptionalRepositoryResult } from '../../context/application/RepositoryResponse';
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
        <>
            {!paginatedResponse ? (
                <div>Loading...</div>
            ) : paginatedResponse.status ? (
                <ul>
                    {paginatedResponse.data.results.map((p) => (
                        <li key={p.name}>{p.name}</li>
                    ))}
                </ul>
            ) : (
                paginatedResponse.reason
            )}
        </>
    );
};
