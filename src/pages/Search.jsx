import React, { Component } from 'react';
import Header from '../components/Header';

const MIN_LENGTH_INPUT = 2;

class Search extends Component {
  state = {
    lengthArtistInput: 0,
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ lengthArtistInput: value.length });
  };

  render() {
    const { lengthArtistInput } = this.state;

    let isDisabled = false;
    if (lengthArtistInput < MIN_LENGTH_INPUT) {
      isDisabled = true;
    }
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <input
            type="text"
            id="search-artist-input"
            data-testid="search-artist-input"
            placeholder="Nome do Artista"
            onChange={ this.handleChange }
          />
          <button
            type="button"
            disabled={ isDisabled }
            id="search-artist-button"
            data-testid="search-artist-button"
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
