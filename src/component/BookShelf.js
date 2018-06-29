import React from 'react';
import Book from './Book';

const BookShelf = props => {
  const { shelf = '', books = [], handleShelfChange = () => {} } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (
            <Book
              key={book.id}
              book={book}
              handleShelfChange={handleShelfChange}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
