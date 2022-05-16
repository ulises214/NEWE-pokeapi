import { FC } from 'react';
import { IndexPage } from './app/pages';
import { PokemonProvidersInjection } from './app/pokemons/providers/PokemonProvidersInjection';

const App: FC = () => {
    return (
        <PokemonProvidersInjection>
            <IndexPage />
        </PokemonProvidersInjection>
    );
};

export default App;
