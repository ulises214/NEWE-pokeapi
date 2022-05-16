import { FC, useCallback, useContext, useEffect, useState } from 'react';
import { PaginatedPokemonsResponse } from '../../context/application/pokemon/PokemonResponses';
import { OptionalRepositoryResult } from '../../context/application/RepositoryResponse';
import { PageControls } from '../pokemons/components/organisms/PageControls';
import { PokemonsList } from '../pokemons/components/organisms/PokemonsList';
import { PokemonDetailsModal } from '../pokemons/components/templates/PokemonDetailsModal';
import { PokemonRepositoryContext } from '../pokemons/providers/PokemonRepository';

export const IndexPage: FC = () => {
    const pokeRepo = useContext(PokemonRepositoryContext);
    const [paginatedResponse, setPaginatedResponse] =
        useState<OptionalRepositoryResult<PaginatedPokemonsResponse>>(
            undefined,
        );
    const [pokeOffset, setPokeOffset] = useState(10);
    const [clicked, setClicked] = useState(false);
    useEffect(() => {
        if (!clicked) return;
        setPaginatedResponse(undefined);
        const fetchPaginatedPokemons = async (): Promise<void> => {
            const response = await pokeRepo.getPaginated(pokeOffset);
            setPaginatedResponse(response);
        };
        fetchPaginatedPokemons();
    }, [pokeOffset, clicked]);
    const loadData = useCallback(() => {
        setPokeOffset(10);
        setClicked(true);
    }, []);
    return (
        <main className="container flex flex-col items-center justify-center w-full px-4 py-8 mx-auto">
            <PokemonDetailsModal />
            <PageControls
                currOffset={pokeOffset}
                totalResult={
                    paginatedResponse?.status ? paginatedResponse.data.count : 0
                }
                onReset={loadData}
                onNext={
                    paginatedResponse?.status && paginatedResponse?.data.next
                        ? (): void => setPokeOffset((prev) => prev + 10)
                        : undefined
                }
                onPrevious={
                    paginatedResponse?.status &&
                    paginatedResponse?.data.previous
                        ? (): void => setPokeOffset((prev) => prev - 10)
                        : undefined
                }
            />
            <div className="h-4"></div>
            {clicked ? (
                !paginatedResponse ? (
                    <div>Loading...</div>
                ) : paginatedResponse && paginatedResponse.status ? (
                    <PokemonsList results={paginatedResponse.data.results} />
                ) : (
                    paginatedResponse.reason
                )
            ) : (
                <></>
            )}
        </main>
    );
};
