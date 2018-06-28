import React, { Component } from 'react';
import { update } from '../BooksAPI';

export default class Book extends Component {
  render() {
    const { book = {}, handleShelfChange = () => {} } = this.props;
    const link =
      book.imageLinks.thumbnail ||
      'https://islandpress.org/sites/default/files/400px%20x%20600px-r01BookNotPictured.jpg';

    const handleChange = (value, book) => {
      book.shelf = value;
      handleShelfChange(book);
      update(book, value);
    };

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${link})`
              }}
            />
            <div className="book-shelf-changer">
              <select onChange={e => handleChange(e.target.value, book)}>
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title || '-'}</div>
          <div className="book-authors">
            {book.authors.join(', ') || 'Unknown Author'}
          </div>
        </div>
      </li>
    );
  }
}
