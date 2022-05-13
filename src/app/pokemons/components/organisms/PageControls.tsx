import { FC } from 'react';
import { Button } from '../../../components/atoms/button';

interface PokemonListItemProps {
    currOffset: number;
    totalResult: number;
    onReset: () => void;
    onNext?: () => void;
    onPrevious?: () => void;
}
export const PageControls: FC<PokemonListItemProps> = ({
    currOffset,
    onReset,
    totalResult,
    onNext,
    onPrevious,
}) => {
    return (
        <div className="bg-[#0197F6] rounded-md p-4 flex justify-between">
            <Button type="button" onClick={onReset}>
                Reiniciar
            </Button>
            <div className="flex items-center gap-4">
                <Button type="button" onClick={onPrevious}>
                    Anterior
                </Button>
                <span className="font-bold">
                    {currOffset + 1}-{currOffset + 10}/{totalResult}
                </span>
                <Button type="button" onClick={onNext}>
                    Siguiente
                </Button>
            </div>
        </div>
    );
};
