import { 
    FETCH_FAVORITE_POKEMON,
    SET_FAVORITE_POKEMON,
    REMOVE_FAVORITE_POKEMON
} from './pokemonTypes';

const fetchFavoritesPokemons = favorites => {
    return {
        type: FETCH_FAVORITE_POKEMON,
        payload: favorites
    }
}

const setFavoritePokemon = () => {
    return {
        type: SET_FAVORITE_POKEMON
    }
}

const removeFavoritePokemon = () => {
    return {
        type: REMOVE_FAVORITE_POKEMON
    }
}

const getLocalStorage = () => {
    return localStorage.getItem('favoritesPokemons') ? JSON.parse(localStorage.getItem('favoritesPokemons')) : []
}

const setLocalStorage = (favoritesPokemons) => {
    localStorage.setItem('favoritesPokemons', JSON.stringify(favoritesPokemons));
}

export const fetchFavorites = () => async dispatch => {
    const favoritesPokemons = getLocalStorage();
    if (favoritesPokemons) {
        dispatch(fetchFavoritesPokemons(favoritesPokemons));
    }
}

export const setFavorites = (pokemon) => async dispatch => {
    const favoritesPokemons = getLocalStorage();
    favoritesPokemons.push(pokemon);
    setLocalStorage(favoritesPokemons);
    dispatch(fetchFavoritesPokemons(favoritesPokemons));
    dispatch(setFavoritePokemon());
}

export const removeFavorite = (pokemon) => async dispatch => {
    const favoritesPokemons = getLocalStorage();
    const actualFavotires = favoritesPokemons.filter(item => item.name !== pokemon.name);
    setLocalStorage(actualFavotires);
    dispatch(fetchFavoritesPokemons(actualFavotires));
    dispatch(removeFavoritePokemon());
}