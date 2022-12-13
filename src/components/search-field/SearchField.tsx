import React from 'react';
import { Checkbox } from '../';
import { CustomSearchField } from './SerachField-style';

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
        <Checkbox isLoading={isLoading} setChecked={setChecked} />
      </div>
    </CustomSearchField>
  );
};

export default SearchField;
