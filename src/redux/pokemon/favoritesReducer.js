

import {
    FETCH_FAVORITE_POKEMON,
    SET_FAVORITE_POKEMON,
    REMOVE_FAVORITE_POKEMON
} from './pokemonTypes';

const initialState = {
    favoritesPokemons: localStorage.getItem('favoritesPokemons') ? JSON.parse(localStorage.getItem('favoritesPokemons')) : []
}

const favoritesPokemonsReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case FETCH_FAVORITE_POKEMON:
            return  {
                favoritesPokemons: action.payload
            }
        
        case SET_FAVORITE_POKEMON:
            return  state

        case REMOVE_FAVORITE_POKEMON:
            return  state

        default: return state
    }
}

export default favoritesPokemonsReducer;