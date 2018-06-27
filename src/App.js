import React from 'react';
import { get, getAll, update, search } from './BooksAPI';
import { Route } from 'react-router-dom';
import './App.css';
import MainScreen from './container/MainScreen';
import Search from './container/Search';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  };

  render() {
    return (
      <div className="app">
        <Route path="/" exact render={() => <MainScreen />} />
        <Route path="/search" render={() => <Search />} />
      </div>
    );
  }
}

export default BooksApp;
