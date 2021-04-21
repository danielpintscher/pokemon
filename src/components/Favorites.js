import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchFavorites, getPokemons, cleanPokemonState } from '../redux';

import { Container, List, Detail, Close } from '../styles';
import PokemonDetail from './PokemonDetail';

function Favorites ({ pokemon, favorites, fetchFavorites, getPokemons, cleanPokemonState}) {

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <Container>
      { favorites && favorites.length > 0 ?  
        <List>
          {favorites.map((favorite, favoriteIndex) => 
            <li key={favoriteIndex} onClick={() => getPokemons(favorite.name)}>
              <span>{favorite.name}</span>
            </li>
          )}
        </List> 
      : <h2>You havem't favorites Pokemons</h2> }
      { pokemon ?
        <Detail>
          <div className="content">
          <Close onClick={() => cleanPokemonState()}>X</Close>
            <PokemonDetail pokemon={pokemon} remove={true} />
          </div>
        </Detail>
      : null }
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    favorites: state.favorites.favoritesPokemons,
    pokemon: state.pokemon.pokemon
  }
}

const mapDispatchProps = dispatch => {
  return {
    fetchFavorites: () => dispatch(fetchFavorites()),
    getPokemons: (pokemonID) => dispatch(getPokemons(pokemonID)),
    cleanPokemonState: () => dispatch(cleanPokemonState()),
  }
}

export default connect(mapStateToProps, mapDispatchProps)(Favorites);
