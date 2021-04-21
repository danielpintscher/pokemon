import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPokemons, getPokemons, cleanPokemonState } from '../redux';
import ReactPaginate from 'react-paginate';

import { Container, List, Detail, Close } from '../styles'
import PokemonDetail from './PokemonDetail';

import '../lib/styles/Paginate.css';

function PokeList ({ count, pokemon, pokemons, loading, fetchPokemons, getPokemons, cleanPokemonState }) {
  
  const limit = 20;

  useEffect(() => {
    fetchPokemons(false, 0);
  }, []);

  const pages = Math.ceil(count/limit);

  const handlePageClick = (data) => {
    fetchPokemons(false, Math.ceil(data.selected > 0 ? (data.selected*limit) : 0));
  }

  return loading ? 
    <h2>Loading</h2>
  : (
    <Container>
      { pokemons.length > 0 ?
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      : null }
      { pokemons.length > 0 ?
          <List>
            {pokemons.map((pokemon, pokemonIndex) => 
              <li key={pokemonIndex} onClick={() => getPokemons(pokemon.name)}>
                <span>{pokemon.name}</span>
              </li>
            )}
          </List>
      : <h2>Haven't Pokemons to this search</h2> }
      { pokemon ?
        <Detail>
          <div className="content">
          <Close onClick={() => cleanPokemonState()}>X</Close>
            <PokemonDetail pokemon={pokemon} />
          </div>
        </Detail>
      : null }
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    pokemons: state.pokemons.pokemons,
    offset: state.pokemons.offset,
    count: state.pokemons.count,
    loading: state.pokemons.loading,
    pokemon: state.pokemon.pokemon
  }
}

const mapDispatchProps = dispatch => {
  return {
    fetchPokemons: (terms, offset) => dispatch(fetchPokemons(terms, offset)),
    getPokemons: (pokemon) => dispatch(getPokemons(pokemon)),
    cleanPokemonState: () => dispatch(cleanPokemonState()),
  }
}

export default connect(mapStateToProps, mapDispatchProps)(PokeList);
