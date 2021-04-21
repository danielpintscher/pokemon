import { 
    GET_POKEMON_REQUEST, 
    GET_POKEMON_SUCCESS, 
    GET_POKEMON_FAILURE,
    CLEAN_POKEMON
} from './pokemonTypes';

const initalState = {
    loading: false,
    pokemon: null,
    error: ''
}

const pokemonReducer = (state = initalState, action) => {
    switch(action.type) {
        case CLEAN_POKEMON:
            return {
                loading: false,
                pokemon: null,
                error: null
            }

        case GET_POKEMON_REQUEST:
            return {
                ...state,
                loading: true
            }
        
        case GET_POKEMON_SUCCESS:
            return  {
                loading: false,
                pokemon: action.payload,
                error: ''
            }

        case GET_POKEMON_FAILURE:
            return  {
                loading: false,
                pokemon: null,
                error: action.payload
            }
        default: return state
    }
}

export default pokemonReducer;