import React from 'react';
import { PokemonInfo } from '../pokemon-card/PokemonCard';
import { CustomOuterList, CustomInnerList } from './CustomList-style';

const CustomList = ({
  pokemonInfo,
}: {
  pokemonInfo: PokemonInfo | undefined;
}) => {
  return (
    <CustomOuterList>
      <li>
        <b>Name:</b> <span>{pokemonInfo?.name}</span>
      </li>
      <li>
        <b>Height:</b> <span>{pokemonInfo?.height}</span>
      </li>
      <li>
        <b>Weight:</b> <span>{pokemonInfo?.weight}</span>
      </li>
      <li>
        <label>
          <b>Abilities: </b>
        </label>
        <CustomInnerList>
          {pokemonInfo?.abilities.map(({ is_hidden, ability }, i) => {
            if (!is_hidden) {
              return <li key={i}>{ability.name}</li>;
            } else {
              return null;
            }
          })}
        </CustomInnerList>
      </li>
    </CustomOuterList>
  );
};

export default CustomList;
