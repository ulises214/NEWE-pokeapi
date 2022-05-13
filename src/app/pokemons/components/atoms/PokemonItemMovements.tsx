import { FC } from 'react';
import { PokemonAbility } from '../../../../context/domain/Pokemon/Pokemon';
import { capitalizeFirstLetter } from '../../../utils/StringUtils';

export const PokemonItemMovements: FC<{ abilities: PokemonAbility[] }> = ({
    abilities,
}) => {
    return (
        <>
            <span className="font-bold">Movements</span>
            <ol className="flex flex-row flex-wrap list-disc list-inside gap-x-2">
                {abilities.map((a) => (
                    <li className="text-sm" key={a.ability.url}>
                        {capitalizeFirstLetter(a.ability.name)}
                    </li>
                ))}
            </ol>
        </>
    );
};
