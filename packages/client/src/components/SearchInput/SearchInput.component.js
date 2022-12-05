import React from 'react';
import './SearchInput.style.css';
import PropTypes from 'prop-types';

const SearchInput = ({ searchInput, setSearchInput }) => {
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        placeholder="Search"
        className="search-input"
        onChange={handleChange}
        value={searchInput}
      />
    </div>
  );
};

SearchInput.propTypes = {
  searchInput: PropTypes.string.isRequired,
  setSearchInput: PropTypes.string.isRequired,
};

export default SearchInput;
