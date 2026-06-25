import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa6"

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
                if (!response.ok) throw new Error('an error occured')
                const datus = await response.json()
                setPokemonDetail(datus)
                setError(null)
            }
            catch (error) {
                console.log(error.message)
                setError(error.message)
                setPokemonDetail(null)
            }
            finally {
                setLoading(false)
            }    
        }
        
        pokemonFetchDetails()
    }, [name])

    if (loading) return <p className="text-center mt-10">Loading...</p>
    if (error) return <p className="text-center mt-10">Error: {error}</p>
    if (!pokemonDetail) return <p className="text-center mt-10">No pokemon found</p>

    return (
        <div className="max-w-3xl mx-auto px-4 py-6">

            <Link to='/pokemons'>
                <button className="flex items-center gap-2 mb-6 px-4 py-2 rounded-lg">
                    <FaArrowLeft /> Back to List
                </button>
            </Link>

            <div className="flex flex-col items-center sm:flex-row sm:items-center sm:gap-8 mb-6">
                <img 
                    src={pokemonDetail.sprites.front_default} 
                    alt={pokemonDetail.name}
                    className="w-40 h-40 sm:w-48 sm:h-48 object-contain"
                />
                <div className="text-center sm:text-left">
                    <p className="text-3xl font-bold capitalize">{pokemonDetail.name}</p>
                    <p className="mt-1">Height: {pokemonDetail.height}</p>
                    <p className="mt-1">Weight: {pokemonDetail.weight}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                <div className="rounded-lg p-4">
                    <p className="font-bold text-lg mb-2">Types</p>
                    {
                    pokemonDetail.types.map((t, index) => (
                        <p key={index} className="capitalize">
                            {t.type.name}
                        </p>
                    ))
                    }
                </div>

                <div className="rounded-lg p-4">
                    <p className="font-bold text-lg mb-2">Abilities</p>
                    {
                    pokemonDetail.abilities.map((a, index) => (
                        <p key={index} className="capitalize">
                            {a.ability.name}
                        </p>
                    ))
                    }
                </div>

                <div className="rounded-lg p-4">
                    <p className="font-bold text-lg mb-2">Stats</p>
                    {
                    pokemonDetail.stats.map((s, index) => (
                        <p key={index} className="capitalize">
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