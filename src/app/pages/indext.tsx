import { FC, SetStateAction, useContext, useEffect, useState } from 'react';
import { PaginatedPokemonsResponse } from '../../context/application/pokemon/PokemonResponses';
import { OptionalRepositoryResult } from '../../context/application/RepositoryResponse';
import { PageControls } from '../pokemons/components/organisms/PageControls';
import { PokemonsList } from '../pokemons/components/organisms/PokemonsList';
import { PokemonRepositoryContext } from '../providers/PokemonRepository';

const PageContent: FC<{
    data: PaginatedPokemonsResponse;
    changeOffset: (newOffset: SetStateAction<number>) => void;
    currOffset: number;
}> = ({ changeOffset, data, currOffset }) => {
    return (
        <div className="flex flex-col w-full gap-4 p-8">
            <PageControls
                currOffset={currOffset}
                totalResult={data.count}
                onReset={(): void => changeOffset(10)}
                onNext={
                    data.next
                        ? (): void => changeOffset((prev) => prev + 10)
                        : undefined
                }
                onPrevious={
                    data.previous
                        ? (): void => changeOffset((prev) => prev - 10)
                        : undefined
                }
            />
            <PokemonsList results={data.results} />
        </div>
    );
};
export const IndexPage: FC = () => {
    const pokeRepo = useContext(PokemonRepositoryContext);
    const [paginatedResponse, setPaginatedResponse] =
        useState<OptionalRepositoryResult<PaginatedPokemonsResponse>>(
            undefined,
        );
    const [pokeOffset, setPokeOffset] = useState(10);
    useEffect(() => {
        setPaginatedResponse(undefined);
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
                <PageContent
                    currOffset={pokeOffset}
                    data={paginatedResponse.data}
                    changeOffset={(newOffset): void => setPokeOffset(newOffset)}
                />
            ) : (
                paginatedResponse.reason
            )}
        </main>
    );
};
