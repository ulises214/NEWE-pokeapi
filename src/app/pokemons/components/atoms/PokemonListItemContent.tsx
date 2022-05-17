import { FC } from 'react';
import { Pokemon } from '../../../../context/domain/Pokemon/Pokemon';
import { Divider } from '../../../components/atoms/divider';
import { PokemonImage } from './PokemonImage';
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
            <PokemonImage pokemon={pokemon} />
            <div className="flex-grow">
                <Divider />
                <PokemonItemMovements moves={pokemon.moves} />
            </div>
        </div>
    );
};
