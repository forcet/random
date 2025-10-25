import { Router, Request, Response, NextFunction } from "express";
import { PokemonService } from "../service/PokemonService";

const router = Router();
const pokemonService = new PokemonService();

router.get("/lucky", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const pokemon = await pokemonService.getPokemon();  
      if (!pokemon) return res.status(404).send({ message: "No encontrado" });
      return res.send(pokemon.toString()); 
    } catch (err) {
      next(err);
    }
});

export default router;