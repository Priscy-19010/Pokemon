import { useContext } from "react"
import { PokemonContext } from "./PokemonContext";

export default function Search(){
    const { search, setSearch } = useContext(PokemonContext);
    
    return(
        <div>
            <input type="text" 
            value={search}
            placeholder="Search for your pokemon..."
            onChange={(e) => setSearch(e.target.value)}
            className=" border-2 p-2 rounded-xl"
            />
        </div>
    )
}