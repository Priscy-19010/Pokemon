import { Link } from "react-router-dom"

export default function PokemonDetail({ PokeName}){
    
    return(
        <Link to={`/pokemon/${PokeName}`}>

        <div className="">
            <div className=""></div>
            <p>{PokeName}</p>
        </div>

        </Link>
    )
}