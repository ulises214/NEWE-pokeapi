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
                alt={pokemon.name}
                src={
                    pokemon.sprites.front_default ??
                    pokemon.sprites.back_default ??
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/640px-Pok%C3%A9_Ball_icon.svg.png'
                }
            />
            <div className="flex-grow">
                <Divider />
                <PokemonItemMovements abilities={pokemon.abilities} />
            </div>
        </div>
    );
};
