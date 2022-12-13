import React from 'react';
import { Checkbox, CustomSearchField } from './SerachField-style';

interface Props {
  isLoading: boolean;
  handleSearch: () => void;
  searchInput: React.RefObject<HTMLInputElement>;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  setPokemonsCaught: React.Dispatch<React.SetStateAction<string[]>>;
}

const SearchField = ({
  isLoading,
  handleSearch,
  searchInput,
  setChecked,
  setPokemonsCaught,
}: Props) => {
  return (
    <CustomSearchField>
      <input
        ref={searchInput}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      <div className='buttons'>
        <div className='button' onClick={() => handleSearch()}>
          Search
        </div>
        <div className='button' onClick={() => setPokemonsCaught([])}>
          Release all
        </div>
      </div>
      <div className='checkboxContainer'>
        <Checkbox
          className='checkbox'
          disabled={isLoading}
          id='checkbox'
          onChange={(e) => setChecked(e.target.checked)}
          type='checkbox'
        />
        <label
          htmlFor='checkbox'
          style={{ marginTop: '5px', paddingLeft: '5px' }}
        >
          (Show caught pokemons)
        </label>
      </div>
    </CustomSearchField>
  );
};

export default SearchField;
