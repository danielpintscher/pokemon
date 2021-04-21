import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPokemons } from '../redux';
import { Header, SmallLink, Search } from '../styles'
import { useLocation, Link, useHistory } from 'react-router-dom';

function TopHeader({pokemons, fetchPokemons}) {
    
    const history = useHistory();

    const goToHomeAndSearch = (term) => {
        history.push('/');
        fetchPokemons(term, 0);
    }
        
    const location = useLocation().pathname;

    useEffect(() => {
        if ( pokemons.length > 0 ) {
            fetchPokemons(false, 0);
        }
    }, []);

    function swicthLocation() {
        switch(location) {
            case '/':
                return <Link to="/favorites">go to favorites</Link>;
            case '/favorites':
                return <Link to="/">go to home</Link>;
            default:
                return <Link to="/favorites">go to favorites</Link>;
        }
    }

    return (
        <Header>
        <h1>
            <img src={'https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo.png'} height={'120'} />
            <SmallLink>
                { swicthLocation() }
            </SmallLink>
        </h1>
        <Search placeholder="Search Pokemons" onChange={($evt) => goToHomeAndSearch($evt.target.value)}></Search>
        </Header>
    );
}

const mapStateToProps = state => {
    return {
      pokemons: state.pokemons.pokemons
    }
  }
  
const mapDispatchProps = dispatch => {
    return {
        fetchPokemons: (terms, offset) => dispatch(fetchPokemons(terms, offset))
    }
}

export default connect(mapStateToProps, mapDispatchProps)(TopHeader);
