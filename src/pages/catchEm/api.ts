import axios from 'axios';
import { Type } from './CatchEm';

interface TypeDto {
  pokemon: {
    pokemon: {
      name: string;
      url: string;
    };
  }[];
}

interface TypeB {
  results: Type[];
}

const BASE_URL: string = 'https://pokeapi.co/api/v2';

const getType = (type: string) =>
  axios.get<TypeDto>(`${BASE_URL}/type/${type}`);

const getTypes = () => axios.get<TypeB>(`${BASE_URL}/type`);

const getPokemon = (url: string) => axios.get(url);

const getAllPokemons = () =>
  axios.get(`${BASE_URL}/pokemon?limit=100000&offset=0`);

export { getAllPokemons, getPokemon, getType, getTypes };
