import React, { useState, useEffect, useReducer, useMemo, useRef } from 'react';

import { useFetch } from 'Hooks/useFetch';

import { Input } from 'Components/Input';
import { Cards } from 'Components/Cards';

import { StyledHome } from 'Styles/pages/HomeStyles';

export const Home = () => {
  const { data } = useFetch();
  const [search, setSearch] = useState('');
  const searchInput = useRef(null);

  const handleSearch = () => {
    setSearch(searchInput.current.value);
  };

  const filteredRestaurants = useMemo(
    () =>
      data.filter(({ name }) => {
        return name.toLowerCase().includes(search.toLowerCase());
      }),
    [data, search]
  );

  return (
    <StyledHome>
      <Input
        handleSearch={handleSearch}
        search={search}
        searchInput={searchInput}
      />
      <Cards filteredRestaurants={filteredRestaurants} />
    </StyledHome>
  );
};
