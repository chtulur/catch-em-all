import React, { useEffect, useMemo, useRef, useState } from 'react';
import Spinner from '../../styles/Spinner';
import { PokemonCard, SearchField } from '../../components';
import {
  Container,
  CustomContainer,
  CustomSelect,
  NameContainer,
  SpinnerContainer,
} from './catchEm-style';
import spinnerIcon from '../../images/pngtree-loading-icon-vector-transparent-png-image_5687537.png';
import { getAllPokemons, getType, getTypes } from './api';

export interface Pokemon {
  name: string;
  url: string;
}

export interface Type {
  name: string;
  url: string;
}

interface AllType {
  type: string;
  pokemons: Pokemon[];
}

const CatchEm: React.FC = () => {
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [allTypes, setAllTypes] = useState<AllType[]>([]);
  const [pokemonsCaught, setPokemonsCaught] = useState<string[]>([]);
  const [types, setTypes] = useState<Type[]>();

  const [searchTerm, setSearchTerm] = useState<string>('');

  const [selectedType, setSelectedType] = useState<string>();
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>();

  const [isLoading, setLoading] = useState(false);
  const [isChecked, setChecked] = useState(false);

  const searchInput = useRef<HTMLInputElement>(null);

  const pokemons = useMemo(() => {
    return allTypes
      ?.find(({ type }) => type === selectedType)
      ?.pokemons.map((pokemon) => pokemon);
  }, [allTypes, selectedType]);

  /**
   * This useMemo handles the pokemons we can see
   * it checks if we want to see only
   *  >caught pokemons
   *  >search on caught pokemons
   *  >pokemons of a certain type
   *  >search on a certain type
   */
  const filteredPokemons = useMemo(() => {
    if (isChecked && searchTerm) {
      const all = allPokemons.filter(({ name }) =>
        pokemonsCaught.includes(name)
      );
      return all.filter(({ name }) =>
        name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else if (isChecked) {
      return allPokemons.filter(({ name }) => pokemonsCaught.includes(name));
    } else if (searchTerm) {
      return pokemons?.filter(({ name }) =>
        name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      return pokemons;
    }
  }, [pokemons, searchTerm, pokemonsCaught, isChecked, allPokemons]);

  useEffect(() => {
    setLoading(true);

    getTypes()
      .then(({ data }) => {
        setTypes(data.results);
        setSelectedType(data.results[0]?.name);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });

    getAllPokemons()
      .then(({ data }) => {
        setAllPokemons(data.results);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (allTypes && allTypes.length === 0 && types && types?.length > 0) {
      const placeHolderArr: AllType[] = [];
      Promise.all(types.map((type) => getType(type.name)))
        .then((dataBatch) => {
          dataBatch.forEach(({ data }) => {
            placeHolderArr.push({
              type: data.name,
              pokemons: data.pokemon.map((p: any) => p.pokemon),
            });
          });
          return placeHolderArr;
        })
        .then((array) => setAllTypes(array));
    }
  }, [allTypes, types]);

  const handleSearch = (): void => {
    setSearchTerm(searchInput.current?.value ?? '');
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedType(e.target.value);
    setSelectedPokemon(undefined);
  };

  return (
    <Container>
      <div>
        <CustomContainer>
          <div className='selectAndList'>
            <CustomSelect
              disabled={isChecked}
              onChange={(e) => handleTypeChange(e)}
              value={selectedType}
            >
              {types &&
                types.map((type, i) => <option key={i}>{type.name}</option>)}
            </CustomSelect>

            {isLoading && (
              <SpinnerContainer>
                <Spinner src={spinnerIcon} alt='spinner' />
              </SpinnerContainer>
            )}

            <br />

            <SearchField
              isLoading={isLoading}
              handleSearch={handleSearch}
              searchInput={searchInput}
              setChecked={setChecked}
              setPokemonsCaught={setPokemonsCaught}
            />
            {filteredPokemons &&
              filteredPokemons.map(({ name, url }, i) => (
                <NameContainer
                  key={i}
                  onClick={() => setSelectedPokemon({ name: name, url: url })}
                  className={`
                    ${pokemonsCaught.includes(name) ? 'caught' : ''}
                    ${selectedPokemon?.url === url ? ' selected' : ''}
                    `}
                >
                  {name}
                </NameContainer>
              ))}
          </div>
          <div>
            {selectedPokemon && (
              <PokemonCard
                selectedPokemon={selectedPokemon}
                isCaught={pokemonsCaught.includes(selectedPokemon.name)}
                setPokemonsCaught={setPokemonsCaught}
              />
            )}
          </div>
        </CustomContainer>
      </div>
    </Container>
  );
};

export default CatchEm;
