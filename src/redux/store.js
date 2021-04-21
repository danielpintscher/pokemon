import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import pokemonReducer from './pokemon/pokemonReducer';
import pokemonsReducer from './pokemon/pokemonsReducer';
import favoritesReducer from './pokemon/favoritesReducer';

const rootReducer = combineReducers({
    pokemon: pokemonReducer,
    pokemons: pokemonsReducer,
    favorites: favoritesReducer
})

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

export default store;