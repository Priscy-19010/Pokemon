import { useContext } from "react"
import { Link } from "react-router-dom"
import { PokemonContext } from "./PokemonContext";
import { FaArrowLeft } from "react-icons/fa6";
import PokemonCard from "./PokemonCard";
import Search from "./Search";

export default function PokemonList(){
    const { pokemon, loading, search, setSearch } = useContext(PokemonContext);

    if (loading) return <p className="text-center mt-10">Loading...</p>
    if (pokemon.length === 0) return <p className="text-center mt-10">No pokemon found</p>

    const filteredPokemon = pokemon.filter((poke) =>
        poke.name.toLowerCase().includes(search.toLowerCase())
    );

    return(
        <div className="max-w-4xl mx-auto px-4 py-6">
            <div className="flex flex-col gap-4">

                {/* Title */}
                <div className="text-2xl text-center sm:text-left">
                    <p>20 of your favourite pokemons</p>
                </div>

                <div className="flex justify-center w-full">
                    <Search />
                </div>

                <div>
                    <Link to='/'>
                        <button className="flex items-center gap-4 p-2 border-2 border-[#F4C430] rounded-2xl text-base hover:bg-[#F4C430] hover:text-[#060B19]">
                            <FaArrowLeft /> Home
                        </button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 border-b-2 border-[#F4C430] pb-4 justify-center">
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
    )
}