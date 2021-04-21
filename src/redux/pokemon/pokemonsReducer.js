
import { 
    FETCH_POKEMONS_REQUEST, 
    FETCH_POKEMONS_SUCCESS, 
    FETCH_POKEMONS_FAILURE
} from './pokemonTypes';

const initialState = {
    loading: false,
    pokemons: [],
    error: '',
    count: 0,
    limit: 20,
    offset: 0
}

const pokemonsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POKEMONS_REQUEST:
            return {
                ...state,
                loading: true
            }
        
        case FETCH_POKEMONS_SUCCESS:
            return  {
                loading: false,
                pokemons: action.payload,
                error: '',
                offset: action.offset,
                count: action.count
            }

        case FETCH_POKEMONS_FAILURE:
            return  {
                loading: false,
                pokemons: [],
                error: action.payload
            }
        default: return state
    }
}

export default pokemonsReducer;