import React, { useEffect, useState } from 'react';
import Spinner from '../../styles/Spinner';
import spinnerIcon from '../../images/pngtree-loading-icon-vector-transparent-png-image_5687537.png';
import { Pokemon } from '../../pages/catchEm/CatchEm';
import { CustomList } from '../';
import { Button, Card, PokemonImageContainer } from './pokemonCard-style';
import { getPokemon } from '../../pages/catchEm/api';

interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface PokemonInfo {
  abilities: Ability[];
  height: number;
  image: string;
  name: string;
  weight: number;
}

interface PokemonCardProps {
  selectedPokemon: Pokemon;
  isCaught: boolean;
  setPokemonsCaught: React.Dispatch<React.SetStateAction<string[]>>;
}

const PokemonCard = ({
  selectedPokemon,
  isCaught,
  setPokemonsCaught,
}: PokemonCardProps) => {
  const [pokemonInfo, setPokemonInfo] = useState<PokemonInfo | undefined>();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    if (selectedPokemon) {
      getPokemon(selectedPokemon.url)
        .then(({ data }) => {
          setPokemonInfo({
            abilities: data.abilities,
            height: data.height,
            image: data.sprites.front_default,
            name: data.name,
            weight: data.weight,
          });
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.error(err);
        });
    }
  }, [selectedPokemon]);

  const handleClick = () => {
    setPokemonsCaught((prev) =>
      prev.includes(selectedPokemon.name)
        ? prev.filter((a) => a !== selectedPokemon.name)
        : [...prev, selectedPokemon.name]
    );
  };

  return (
    <Card>
      <div className='cardContent'>
        <PokemonImageContainer>
          {isLoading ? (
            <Spinner src={spinnerIcon} alt='spinner' />
          ) : (
            <img src={pokemonInfo?.image} alt={pokemonInfo?.name} />
          )}
        </PokemonImageContainer>

        <CustomList pokemonInfo={pokemonInfo} />

        <Button className='catchBtn' onClick={handleClick}>
          {isCaught ? 'Release' : 'Catch'}
        </Button>
      </div>
    </Card>
  );
};

export default PokemonCard;
