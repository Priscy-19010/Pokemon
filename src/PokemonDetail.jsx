

export default function PokemonDetail(){

    const {id, name} = useParams()

    const [PokemonDetail , setPokemonDetail]= useState(null)
    const [error , setError]= useState(null)
    const [loading, setLoading]= useState(true)

    useEffect(()=>{
        setLoading(true)
        async function pokemonUrlFetch(){
            try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            if(!res.ok){
                throw new Error('an error occured')
            }
            const data = await res.json()
            setPokemonDetails(data)
            setError(null)
        } 
        catch (error) {
            console.error(error.message)
            setError(error.message)
            setPokemonDetail(null)
            return
        }
        finally{
            setLoading(false)
        }
    }
    pokemonUrlFetch()
},[id, name])

    if(loading){
        return <div>...loading</div>
    }
    if(error){
        return <div>{error}</div>
    }

    return(
        <div>
            
        </div>
    )
}