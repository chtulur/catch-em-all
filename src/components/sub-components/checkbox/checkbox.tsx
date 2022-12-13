import React from 'react';
import styled from 'styled-components';

export const CustomCheckbox = styled.input`
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
  margin-left: 1rem;
  margin-top: 0.15rem;
`;

interface Props {
  isLoading: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const Checkbox = ({ isLoading, setChecked }: Props) => {
  return (
    <div className='checkboxContainer'>
      <CustomCheckbox
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
  );
};

export default Checkbox;
