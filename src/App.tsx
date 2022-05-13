import { IndexPage } from './app/pages/indext';
import {
    PokemonRepositoryContext,
    POKEMON_REPOSITORY_INIT_VALUE,
} from './app/providers/PokemonRepository';

function App(): JSX.Element {
    return (
        <PokemonRepositoryContext.Provider
            value={POKEMON_REPOSITORY_INIT_VALUE}
        >
            <IndexPage />
        </PokemonRepositoryContext.Provider>
    );
}

export default App;
