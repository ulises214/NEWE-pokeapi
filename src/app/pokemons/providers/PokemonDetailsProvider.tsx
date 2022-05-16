import { createContext, FC, PropsWithChildren, useState } from 'react';
import { Optional } from '../../../context/domain/Optional';
import { Pokemon } from '../../../context/domain/Pokemon/Pokemon';
export interface PokemonDetailsContextActions {
    pokemon: Optional<Pokemon>;
    clearPokemon: () => void;
    setPokemon: (pokemon: Pokemon) => void;
}
export const PokemonDetailsContext =
    createContext<Optional<PokemonDetailsContextActions>>(undefined);

export const PokemonDetailsProvider: FC<PropsWithChildren<unknown>> = ({
    children,
}) => {
    const [pokemon, setPokemonState] = useState<Optional<Pokemon>>(undefined);
    const clearPokemon = (): void => setPokemonState(undefined);
    const setPokemon = (pokemon: Pokemon): void => setPokemonState(pokemon);
    return (
        <PokemonDetailsContext.Provider
            value={{ pokemon, clearPokemon, setPokemon }}
        >
            {children}
        </PokemonDetailsContext.Provider>
    );
};
