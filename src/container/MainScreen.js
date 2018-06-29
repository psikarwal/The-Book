import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from '../component/BookShelf';

const MainScreen = props => {
  const bookshelfs = ['Currently Reading', 'Want to Read', 'Read'];
  const { books = [], handleShelfChange = () => {} } = props;
  const currentlyReading = books.filter(
    book => book.shelf === 'currentlyReading'
  );
  const wanToRead = books.filter(book => book.shelf === 'wantToRead');
  const read = books.filter(book => book.shelf === 'read');
  const shelfBooks = [currentlyReading, wanToRead, read];

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {bookshelfs.map((shelf, index) => (
            <BookShelf
              key={`${index + 1}`}
              shelf={shelf}
              books={shelfBooks[index]}
              handleShelfChange={handleShelfChange}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default MainScreen;
