import React from 'react';

import { StyledInput } from 'Styles/components/InputStyles';

export const Input = ({ handleSearch, search, searchInput }) => {
  return (
    <StyledInput>
      <div>
        <input
          type="text"
          placeholder="Search"
          onChange={handleSearch}
          value={search}
          ref={searchInput}
        />
        <a>A-Z</a>
        <a>Rating</a>
      </div>
    </StyledInput>
  );
};
