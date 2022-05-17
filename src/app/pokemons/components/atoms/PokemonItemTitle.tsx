import { FC } from 'react';
import { capitalizeFirstLetter } from '../../../utils/StringUtils';

export const PokemonItemTitle: FC<{ name: string; xp: number }> = ({
    name,
    xp,
}) => {
    return (
        <div className="flex flex-col items-start justify-between xl:flex-row xl:items-end">
            <span className="text-2xl font-medium">
                {capitalizeFirstLetter(name)}
            </span>
            <span className="font-bold">{xp} exp</span>
        </div>
    );
};
