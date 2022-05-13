import { FC } from 'react';
import { PaginatedPokemonsResult } from '../../../../context/application/pokemon/PokemonResponses';
import { PokemonListItem } from '../molecules/PokemonListItem';
interface PokemonListItemProps {
    results: PaginatedPokemonsResult[];
}
export const PokemonsList: FC<PokemonListItemProps> = ({ results }) => {
    return (
        <section className="grid w-full grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {results.map((r) => (
                <PokemonListItem key={r.url} {...r} />
            ))}
        </section>
    );
};
