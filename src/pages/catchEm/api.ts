import Axios from 'axios';
import { Type } from './CatchEm';
import { setupCache } from 'axios-cache-interceptor';

interface TypeDto {
  name: string;
  pokemon: {
    pokemon: {
      name: string;
      url: string;
    };
  }[];
}

interface TypeArr {
  results: Type[];
}

const axios = setupCache(Axios);

const BASE_URL: string = 'https://pokeapi.co/api/v2';

const getType = (type: string) =>
  axios.get<TypeDto>(`${BASE_URL}/type/${type}`);

const getTypes = () => axios.get<TypeArr>(`${BASE_URL}/type`);

const getPokemon = (url: string) => axios.get(url);

const getAllPokemons = () =>
  axios.get(`${BASE_URL}/pokemon?limit=100000&offset=0`);

export { getAllPokemons, getPokemon, getType, getTypes };
