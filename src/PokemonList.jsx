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
            <div className=" flex flex-col gap-3">

                <div className="text-2xl">
                    <p>20 of your favourite pokemons</p>
                </div>

                <div className="flex justify-center w-full">
                    <Search />
                </div>

                <div className="">
                    <Link to='/'>
                    <button className="flex items-center gap-4 p-2 border-2 border-[#F4C430] rounded-2xl text-base hover:bg-[#F4C430] hover:text-[#060B19]"> <FaArrowLeft /> Home</button>
                    </Link>
                </div>
                <div className="text-xl flex flex-col gap-2 p-1 border-b-2 border-[#F4C430]">
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