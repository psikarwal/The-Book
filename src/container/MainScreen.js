import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from '../component/BookShelf';

export default class MainScreen extends Component {
  render() {
    const bookshelfs = ['Currently Reading', 'Want to Read', 'Read'];
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>{bookshelfs.map(shelf => <BookShelf shelf={shelf} />)}</div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}
