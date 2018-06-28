import React from 'react';
import { getAll, search } from './BooksAPI';
import { Route } from 'react-router-dom';
import './App.css';
import MainScreen from './container/MainScreen';
import Search from './container/Search';

class BooksApp extends React.Component {
  state = {};

  componentDidMount() {
    getAll().then(books => this.setState({ books }));
  }

  handleShelfChange = book => {
    this.setState(state => ({
      ...state,
      books: state.books.filter(b => b.id !== book.id).concat([book])
    }));
  };

  render() {
    console.log(16, this.state);

    return (
      <div className="app">
        <Route
          path="/"
          exact
          render={() => (
            <MainScreen
              books={this.state.books}
              handleShelfChange={this.handleShelfChange}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <Search
              books={this.state.books}
              handleShelfChange={this.handleShelfChange}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
