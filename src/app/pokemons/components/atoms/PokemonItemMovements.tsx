import { FC } from 'react';
import { PokemonMove } from '../../../../context/domain/Pokemon/Pokemon';
import { capitalizeFirstLetter } from '../../../utils/StringUtils';

export const PokemonItemMovements: FC<{ moves: PokemonMove[] }> = ({
    moves,
}) => {
    return (
        <>
            <span className="font-bold">Movements</span>
            <ol className="flex flex-row flex-wrap list-disc list-inside gap-x-2">
                {!moves.length && <>No movements</>}
                {moves.slice(0, 5).map((a) => (
                    <li className="text-sm" key={a.move.url}>
                        {capitalizeFirstLetter(a.move.name)}
                    </li>
                ))}
                {moves.length > 5 && <>...</>}
            </ol>
        </>
    );
};
