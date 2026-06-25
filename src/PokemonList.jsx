import { useContext } from "react"
import { Link } from "react-router-dom"
import { PokemonContext } from "./PokemonContext";
import { FaArrowLeft } from "react-icons/fa6";
import PokemonCard from "./PokemonCard";
import Search from "./Search";

export default function PokemonList(){
    const { pokemon, loading, search, setSearch } =
    useContext(PokemonContext);

    console.log("pokemon:", pokemon)

    if (loading) return <p>Loading...</p>
    if (pokemon.length === 0) return <p>No pokemon found</p>

    const filteredPokemon = pokemon.filter((poke) =>
    poke.name.toLowerCase().includes(search.toLowerCase())
    );

    return(
        <div>
            <div className="">

                <Search />

                <div className="">
                    <p>20 of your favourite pokemons</p>
                </div>

                <div className="">
                    <Link to='/'>
                    <button> <FaArrowLeft /> Home</button>
                    </Link>

                    <div className="list">
                        {
                            filteredPokemon.map((poke, index) => (
                                <PokemonCard
                                key={index}
                                PokeName={poke.name}
                                />
                           ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}