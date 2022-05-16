import { FC } from 'react';
import { Pokemon } from '../../../../context/domain/Pokemon/Pokemon';
interface PokemonImageProps {
    pokemon: Pokemon;
}
export const PokemonImage: FC<PokemonImageProps> = ({ pokemon }) => {
    return (
        <img
            className="object-contain w-full aspect-square"
            alt={pokemon.name}
            src={
                pokemon.sprites.front_default ??
                pokemon.sprites.back_default ??
                'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/640px-Pok%C3%A9_Ball_icon.svg.png'
            }
        />
    );
};
