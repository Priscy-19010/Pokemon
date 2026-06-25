import { Link } from "react-router-dom"

export default function NotFound(){

    return(
        <div>
            <p>How did u even get here. Please go back, there is nothing for you here.</p>

            <Link to='/'>Home</Link>
        </div>
    )
}