import { FC } from 'react';
import { PokemonAbility } from '../../../../context/domain/Pokemon/Pokemon';
import { capitalizeFirstLetter } from '../../../utils/StringUtils';

export const PokemonItemMovements: FC<{ abilities: PokemonAbility[] }> = ({
    abilities,
}) => {
    return (
        <>
            <span className="font-bold">Movements</span>
            <div className="flex flex-row flex-wrap gap-x-2">
                {abilities.map((a) => (
                    <span className="text-sm" key={a.ability.url}>
                        {capitalizeFirstLetter(a.ability.name)}
                    </span>
                ))}
            </div>
        </>
    );
};
