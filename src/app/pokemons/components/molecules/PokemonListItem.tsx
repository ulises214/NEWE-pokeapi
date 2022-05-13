import { FC, useContext, useEffect, useState } from 'react';
import { OptionalRepositoryResult } from '../../../../context/application/RepositoryResponse';
import { Pokemon } from '../../../../context/domain/Pokemon/Pokemon';
import { PokemonRepositoryContext } from '../../../providers/PokemonRepository';
import { capitalizeFirstLetter } from '../../../utils/StringUtils';
import { PokemonListItemContent } from '../atoms/PokemonListItemContent';
interface PokemonListItemProps {
    url: string;
    name: string;
}

export const PokemonListItem: FC<PokemonListItemProps> = ({ url, name }) => {
    const pokeRepo = useContext(PokemonRepositoryContext);
    const [pokemon, setPokemon] = useState<OptionalRepositoryResult<Pokemon>>();

    useEffect(() => {
        pokeRepo.getPokemonDetail(url).then((r) => setPokemon(r));
    }, []);

    return !pokemon ? (
        <div></div>
    ) : (
        <article className="py-1 flex flex-col items-center justify-center w-full bg-[#0197F6] rounded-lg">
            {pokemon.status ? (
                <PokemonListItemContent pokemon={pokemon.data} />
            ) : (
                capitalizeFirstLetter(name)
            )}
        </article>
    );
};
