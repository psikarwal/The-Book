import React from 'react';
import { getAll } from './BooksAPI';
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
      books: [...state.books.filter(buk => buk.id !== book.id), book]
    }));
  };

  render() {
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
