import React from 'react';

class SearchBar extends React.Component {

  render() {
    return (
      <div className="mx-5">
        <input class="form-control form-control-lg"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value=""
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SearchBar;
