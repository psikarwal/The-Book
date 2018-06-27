import React, { Component } from 'react';
import Book from './Book';

export default class BookShelf extends Component {
  render() {
    const { shelf } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <Book />
          </ol>
        </div>
      </div>
    );
  }
}
