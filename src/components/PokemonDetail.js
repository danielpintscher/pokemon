import React from 'react';
import { connect } from 'react-redux';
import { setFavorites, removeFavorite, cleanPokemonState } from '../redux';
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarOutline';

function PokemonDetail (props) {

  const removerFromFavorites = (pokemon) => {
    props.removeFavorite(props.pokemon);
    props.cleanPokemonState();
  }

  const addToFavorites = (pokemon) => {
    props.setFavorites(props.pokemon);
    props.cleanPokemonState();
  }

  return (
    <div>
      <p><strong>Name: </strong>{props.pokemon.name}</p>
      <p><strong>Height: </strong>{props.pokemon.height}</p>
      <p><strong>Weight: </strong>{props.pokemon.weight}</p>
      <p><strong>Base Experience: </strong>{props.pokemon.base_experience}</p>
      { !props.remove ?
        <button onClick={() => addToFavorites(props.pokemon)}>
          <StarIcon /> Add to Favorites
        </button>
        : 
        <button onClick={() => removerFromFavorites(props.pokemon)}>
          <StarOutlineIcon /> Remove from Favorites
        </button>
      }
    </div>
  );
}

const mapDispatchProps = dispatch => {
  return {
    setFavorites: (pokemon) => dispatch(setFavorites(pokemon)),
    removeFavorite: (pokemon) => dispatch(removeFavorite(pokemon)),
    cleanPokemonState: () => dispatch(cleanPokemonState())
  }
}

export default connect(null, mapDispatchProps)(PokemonDetail);