import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa6"
import { PokemonContext } from "./PokemonContext";

export default function PokemonDetail() {
    const { name } = useParams()
    const [pokemonDetail, setPokemonDetail] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    useEffect(() => {
        setLoading(true)
        
        async function pokemonFetchDetails() {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        
                if ( !response.ok){
                    throw new Error('an error occured')
                }
        
                const datus = await response.json()
                setPokemonDetail(datus)
                console.log(datus.results)
        
                setError(null)
            }
            catch (error) {
                console.log(error.message)
                setError(error.message)
                setPokemonDetail(null)
            }
            finally{
                setLoading(false)
            }    
        }
        
        pokemonFetchDetails();
    }, [name])


    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>
    if (!pokemonDetail) return <p>No pokemon found</p>

    return (
        <div>
            <Link to='/pokemons'>
                <button><FaArrowLeft /> Back to List</button>
            </Link>

            <img src={pokemonDetail.sprites.front_default} alt={pokemonDetail.name} />

            <div className="">
                <p>{pokemonDetail.name}</p>

                <p>Height: {pokemonDetail.height}</p>

                <p>Weight: {pokemonDetail.weight}</p>

                <div className="">
                    <p>Types:</p>
                    {
                        pokemonDetail.types.map((t, index) => (
                            <p key={index}>
                                {t.type.name}
                            </p>
                        ))
                    }
                </div>
            

                <div className="">
                    <p>Abilities:</p>
                    {
                        pokemonDetail.abilities.map((a, index) => (
                            <p key={index}>
                                {a.ability.name}
                            </p>
                        ))
                    }
                </div>

                <div className="">
                    <p>Stats:</p>
                    {
                        pokemonDetail.stats.map((s, index) => (
                            <p key={index}>
                                {s.stat.name}: 
                                {s.base_stat}
                            </p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}