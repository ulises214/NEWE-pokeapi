import { FC } from 'react';
import { Pokemon } from '../../../../context/domain/Pokemon/Pokemon';
import { Divider } from '../../../components/atoms/divider';
import { PokemonItemMovements } from './PokemonItemMovements';
import { PokemonItemTitle } from './PokemonItemTitle';

export const PokemonListItemContent: FC<{ pokemon: Pokemon }> = ({
    pokemon,
}) => {
    return (
        <div className="flex flex-col justify-between w-3/4 h-full">
            <PokemonItemTitle
                name={pokemon.name}
                xp={pokemon.base_experience}
            />
            <img
                className="object-contain w-full aspect-square"
                src={
                    pokemon.sprites.front_default ??
                    pokemon.sprites.back_default ??
                    undefined
                }
            />
            <div className="flex-grow">
                <Divider />
                <PokemonItemMovements abilities={pokemon.abilities} />
            </div>
        </div>
    );
};
