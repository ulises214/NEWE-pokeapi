import { FC } from 'react';
import { Pokemon } from '../../../../context/domain/Pokemon/Pokemon';
import { Divider } from '../../../components/atoms/divider';
import { decimeterToMeter } from '../../../utils/NumberUtils';
import { PokemonImage } from '../atoms/PokemonImage';
import { PokemonItemTitle } from '../atoms/PokemonItemTitle';
interface PokemonDetailsModalContentProps {
    pokemon: Pokemon;
}
export const PokemonDetailsModalContent: FC<
    PokemonDetailsModalContentProps
> = ({ pokemon }) => {
    return (
        <>
            <PokemonItemTitle
                name={pokemon.name}
                xp={pokemon.base_experience}
            />
            <Divider />
            <div className="flex items-center justify-start gap-1">
                <span className="text-lg rotate-90 text-bold">
                    {decimeterToMeter(pokemon.height)}
                </span>
                <PokemonImage pokemon={pokemon} />
            </div>
        </>
    );
};
