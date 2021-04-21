import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

import PokeList from './components/PokeList';
import TopHeader from './components/TopHeader';
import Favorites from './components/Favorites';

import './lib/styles/App.css';

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <TopHeader />
          <Switch>
            <Route path="/" exact={true} component={PokeList} />
            <Route path="/favorites" component={Favorites} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;