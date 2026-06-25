import { createContext, useState,useEffect } from "react"
import { useParams } from "react-router-dom"
export const PokemonContext = createContext(null)

export const PokemonProvider = ({ children }) => {
    const { name } = useParams()

    const [pokemon, setPokemon] = useState([])
    const [pokemonDetail, setPokemonDetail] = useState(null)
    const [error , setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')

    useEffect(() => {
        setLoading(true)

        async function pokemonFetch() {
            try {
                const res = await fetch('https://pokeapi.co/api/v2/pokemon')

                if (!res.ok){
                    throw new Error('an error occured')
                }

                const data = await res.json();
                setPokemon(data.results)
                console.log(data.results)

                setError(null)
            }
            catch (error) {
                console.error(error.message)
                setError(error.message)
            }
            finally{
                setLoading(false)
            }
            
        }

        pokemonFetch();
    }, [])


    return(
        <PokemonContext.Provider value={{pokemon, loading, error, setLoading, setError, search, setSearch}}>
            { children }
        </PokemonContext.Provider>
    )
}