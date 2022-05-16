import { FC, useContext } from 'react';
import { ModalTemplate } from '../../../components/templates/Modal';
import { PokemonDetailsContext } from '../../providers/PokemonDetailsProvider';
import { PokemonDetailsModalContent } from '../organisms/PokemonDetailsModalContent';

export const PokemonDetailsModal: FC = () => {
    const pokeDetails = useContext(PokemonDetailsContext);
    return (
        <ModalTemplate
            isOpen={!!pokeDetails?.pokemon}
            onClose={pokeDetails?.clearPokemon}
        >
            {pokeDetails?.pokemon && (
                <PokemonDetailsModalContent pokemon={pokeDetails.pokemon} />
            )}
        </ModalTemplate>
    );
};
