import axios from 'axios';
import { 
    FETCH_POKEMONS_REQUEST, 
    FETCH_POKEMONS_SUCCESS, 
    FETCH_POKEMONS_FAILURE,
    GET_POKEMON_REQUEST,
    GET_POKEMON_SUCCESS,
    GET_POKEMON_FAILURE,
    CLEAN_POKEMON
} from './pokemonTypes';

const fetchPokemonsRequest = () => {
    return {
        type: FETCH_POKEMONS_REQUEST
    }
}

const fetchPokemonsSuccess = pokemons => {
    return {
        type: FETCH_POKEMONS_SUCCESS,
        payload: pokemons.results,
        count: pokemons.count,
        limit: 20,
        offset: pokemons.offset
    }
}

const fetchPokemonsFailure = error => {
    return {
        type: FETCH_POKEMONS_FAILURE,
        payload: error
    }
}

const cleanPokemon = () => {
    return {
        type: CLEAN_POKEMON
    }
}

const getPokemonRequest = () => {
    return {
        type: GET_POKEMON_REQUEST
    }
}

const getPokemonSuccess = pokemon => {
    return {
        type: GET_POKEMON_SUCCESS,
        payload: pokemon
    }
}

const getPokemonFailure = error => {
    return {
        type: GET_POKEMON_FAILURE,
        payload: error
    }
}

export const fetchPokemons = (terms, offset = 0) => async dispatch => {
    dispatch(fetchPokemonsRequest);
    axios.get(`https://pokeapi.co/api/v2/pokemon${terms ? '/' + terms.trim() : '?offset='+ offset + '&limit=20'}`)
    .then(response => {
        let pokemons = null;
        if ( response.data.name ) {
            pokemons = {
                results: [{name: response.data.name}],
                error: '',
                count: 1,
                limit: 20,
                offset: 0
            }
        } else {
            pokemons = response.data;
            pokemons.offset = offset;
        }
        dispatch(fetchPokemonsSuccess(pokemons));
    })
    .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchPokemonsFailure(errorMsg));
    })
}

export const getPokemons = (pokemon) => async dispatch => {
    dispatch(getPokemonRequest);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => {
        const pokemon = response.data;
        dispatch(getPokemonSuccess(pokemon));
    })
    .catch(error => {
        const errorMsg = error.message;
        dispatch(getPokemonFailure(errorMsg));
    })
}

export const cleanPokemonState = () => async dispatch => {
    dispatch(cleanPokemon());
}