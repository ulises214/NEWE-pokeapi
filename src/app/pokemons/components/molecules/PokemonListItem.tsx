import { FC, useContext, useEffect, useState } from 'react';
import { OptionalRepositoryResult } from '../../../../context/application/RepositoryResponse';
import { Pokemon } from '../../../../context/domain/Pokemon/Pokemon';
import { capitalizeFirstLetter } from '../../../utils/StringUtils';
import { PokemonDetailsContext } from '../../providers/PokemonDetailsProvider';
import { PokemonRepositoryContext } from '../../providers/PokemonRepository';
import { PokemonListItemContent } from '../atoms/PokemonListItemContent';
interface PokemonListItemProps {
    url: string;
    name: string;
}

export const PokemonListItem: FC<PokemonListItemProps> = ({ url, name }) => {
    const pokeRepo = useContext(PokemonRepositoryContext);
    const detailsContext = useContext(PokemonDetailsContext);
    const [pokemon, setPokemon] = useState<OptionalRepositoryResult<Pokemon>>();

    useEffect(() => {
        pokeRepo.getPokemonDetail(url).then((r) => setPokemon(r));
    }, []);

    return !pokemon ? (
        <div></div>
    ) : (
        <article
            onClick={
                pokemon.status
                    ? (): void => {
                          detailsContext?.setPokemon(pokemon.data);
                      }
                    : undefined
            }
            className={`${
                pokemon.status ? 'cursor-pointer' : 'cursor-default'
            } flex flex-col items-center justify-center w-full py-1 transition-all rounded-lg hover:scale-105 hover:bg-mainBlue-200 bg-mainBlue-300`}
        >
            {pokemon.status ? (
                <PokemonListItemContent pokemon={pokemon.data} />
            ) : (
                capitalizeFirstLetter(name)
            )}
        </article>
    );
};
