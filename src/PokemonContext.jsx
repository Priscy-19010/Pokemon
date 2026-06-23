import { createContext, useState,useEffect } from "react"; 
import { useParams } from "react-router-dom";
export const PokemonContext = createContext(null)
 
export const PokemonProvider = ({ children }) => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        async function pokemonFetch() {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon')
            const data = await res.json();
            setPokemon(data.results)
            console.log(data.results)
        }
        pokemonFetch();
    }, [])


    return(
        <PokemonContext.Provider value={{pokemon}}>
            { children }
        </PokemonContext.Provider>
    )
}