import { Pokemon } from "../model/Pokemon";
import { PokemonDTO } from "../model/PokemonDTO";
import { Random } from "../util/Random";
import { Http } from "./Http";

export class PokemonService { 
    async getPokemon(): Promise<Pokemon> {
        const number = Random.int(1, 700);
        const dto = await Http.getJson<PokemonDTO>(
          `https://pokeapi.co/api/v2/pokemon/${number}`
        );
        return Pokemon.fromDTO(dto);
    }
}