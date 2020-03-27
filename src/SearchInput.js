import React from "react";
import propTypes from "prop-types";
import "./SearchInput.scss";

const SearchInput = ({ onChange }) => {
  return (
    <>
      <input
        type="text"
        name="searchText"
        onChange={onChange}
        className="search-input-field"
      />
    </>
  );
};

SearchInput.propTypes = {
  onChange: propTypes.func.isRequired
};

export default SearchInput;
