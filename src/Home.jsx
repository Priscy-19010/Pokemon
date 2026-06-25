import Background from './Background.jpg'
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function Home(){

    return(
        <div style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${Background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh", 
        }} className=''>

            <div className="flex items-center p-10 h-full font-bold text-4xl w-150 text-[#F4C430]">
                <p className=''>Come with us to discover your favourite pokemons</p>
                <p>
                    <Link to='/pokemons'>
                    <IoSearch />
                    </Link>
                </p>
            </div>
        </div>
    )
}