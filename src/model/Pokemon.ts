
import { PokemonDTO } from "./PokemonDTO";

export class Pokemon {
    constructor(
      public id: number,
      public name: string
    ) {}
  
    static fromDTO(dto: PokemonDTO): Pokemon {
      return new Pokemon(dto.id, dto.name);
    }
  
    toString() {
      return `Para tu aventura te acompañara ${this.name}, suerte: ${this.id}`;
    }
}