import { createContext, FC, PropsWithChildren } from 'react';
import { PokemonRepository } from '../../../context/application/pokemon/PokemonRepository';
import { ApiPokemonRepository } from '../../../context/infrastructure/pokemon/ApiPokemonRepository';
export const POKEMON_REPOSITORY_INIT_VALUE: PokemonRepository =
    new ApiPokemonRepository();
export const PokemonRepositoryContext = createContext<PokemonRepository>(
    POKEMON_REPOSITORY_INIT_VALUE,
);
export const PokemonRepositoryProvider: FC<PropsWithChildren<unknown>> = ({
    children,
}) => {
    return (
        <PokemonRepositoryContext.Provider
            value={POKEMON_REPOSITORY_INIT_VALUE}
        >
            {children}
        </PokemonRepositoryContext.Provider>
    );
};
