import { FC, PropsWithChildren } from 'react';
import { PokemonDetailsProvider } from './PokemonDetailsProvider';
import { PokemonRepositoryProvider } from './PokemonRepository';

export const PokemonProvidersInjection: FC<PropsWithChildren<unknown>> = ({
    children,
}) => {
    return (
        <PokemonRepositoryProvider>
            <PokemonDetailsProvider>{children}</PokemonDetailsProvider>
        </PokemonRepositoryProvider>
    );
};
