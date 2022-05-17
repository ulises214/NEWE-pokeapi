export interface Pokemon {
    abilities: PokemonAbility[];
    base_experience: number;
    forms: Species[];
    game_indices: GameIndex[];
    height: number;
    held_items: HeldItem[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: PokemonMove[];
    name: string;
    order: number;
    past_types: PastType[];
    species: Species;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    weight: number;
}

export interface PokemonAbility {
    ability: Species;
    is_hidden: boolean;
    slot: number;
}

export interface Species {
    name: string;
    url: string;
}

export interface GameIndex {
    game_index: number;
    version: Species;
}

export interface HeldItem {
    item: Species;
    version_details: VersionDetail[];
}

export interface VersionDetail {
    rarity: number;
    version: Species;
}

export interface PokemonMove {
    move: Species;
    version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
    level_learned_at: number;
    move_learn_method: Species;
    version_group: Species;
}

export interface PastType {
    generation: Species;
    types: Type[];
}

export interface Type {
    slot: number;
    type: Species;
}

export interface GenerationV {
    'black-white': Sprites;
}

export interface GenerationIv {
    'diamond-pearl': Sprites;
    'heartgold-soulsilver': Sprites;
    platinum: Sprites;
}

export interface Versions {
    'generation-i': GenerationI;
    'generation-ii': GenerationIi;
    'generation-iii': GenerationIii;
    'generation-iv': GenerationIv;
    'generation-v': GenerationV;
    'generation-vi': { [key: string]: Home };
    'generation-vii': GenerationVii;
    'generation-viii': GenerationViii;
}

export interface Sprites {
    back_default: null | string;
    back_female: null;
    back_shiny: null | string;
    back_shiny_female: null;
    front_default: null | string;
    front_female: null;
    front_shiny: null | string;
    front_shiny_female: null;
    other?: Other;
    versions?: Versions;
    animated?: Sprites;
}

export interface GenerationI {
    'red-blue': RedBlue;
    yellow: RedBlue;
}

export interface RedBlue {
    back_default: null | string;
    back_gray: null | string;
    back_transparent: null | string;
    front_default: null | string;
    front_gray: null | string;
    front_transparent: null | string;
}

export interface GenerationIi {
    crystal: Crystal;
    gold: Gold;
    silver: Gold;
}

export interface Crystal {
    back_default: null | string;
    back_shiny: null | string;
    back_shiny_transparent: null | string;
    back_transparent: null | string;
    front_default: null | string;
    front_shiny: null | string;
    front_shiny_transparent: null | string;
    front_transparent: null | string;
}

export interface Gold {
    back_default: null | string;
    back_shiny: null | string;
    front_default: null | string;
    front_shiny: null | string;
    front_transparent?: null | string;
}

export interface GenerationIii {
    emerald: Emerald;
    'firered-leafgreen': Gold;
    'ruby-sapphire': Gold;
}

export interface Emerald {
    front_default: null | string;
    front_shiny: null | string;
}

export interface Home {
    front_default: null | string;
    front_female: null;
    front_shiny: null | string;
    front_shiny_female: null;
}

export interface GenerationVii {
    icons: DreamWorld;
    'ultra-sun-ultra-moon': Home;
}

export interface DreamWorld {
    front_default: null | string;
    front_female: null;
}

export interface GenerationViii {
    icons: DreamWorld;
}

export interface Other {
    dream_world: DreamWorld;
    home: Home;
    'official-artwork': OfficialArtwork;
}

export interface OfficialArtwork {
    front_default: string;
}

export interface Stat {
    base_stat: number;
    effort: number;
    stat: Species;
}
