import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { search } from '../BooksAPI';
import Book from '../component/Book';
import { DebounceInput } from 'react-debounce-input';

export default class Search extends Component {
  state = {
    result: [],
    error: ''
  };

  searchQuery = event => {
    const query = event.target.value;
    const { books } = this.props;
    if (query) {
      search(query, 15).then(result => {
        if (!result) {
          this.setState({ result: [], error: '❌ No result found' });
        } else if (result.error) {
          this.setState({
            result: [],
            error: "😌 Sorry! I couldn't find any book regarding your query."
          });
        } else {
          const booksWithShelves = result.map(book => {
            const find = books.find(buk => buk.id === book.id);
            if (find) book.shelf = find.shelf;
            else book.shelf = 'none';
            return book;
          });
          this.setState({ result: booksWithShelves, error: '' });
        }
      });
    } else {
      this.setState({ result: [], error: '' });
    }
  };

  render() {
    const { handleShelfChange = () => {} } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <DebounceInput
              placeholder="Search by title or author"
              debounceTimeout={300}
              onChange={this.searchQuery}
            />
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.error
              ? this.state.error
              : this.state.result.map((book, index) => (
                  <Book
                    key={`${index + 1}`}
                    book={book}
                    handleShelfChange={handleShelfChange}
                  />
                ))}
          </ol>
        </div>
      </div>
    );
  }
}
