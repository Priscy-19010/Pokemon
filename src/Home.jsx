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
        }}>

            <div className="flex items-center justify-between p-6 sm:p-10 h-full font-bold text-[#F4C430]">
                
                <p className="text-2xl sm:text-3xl md:text-4xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2 leading-snug">
                    Come with us to discover your favourite pokemons
                </p>

                <Link to='/pokemons'>
                    <IoSearch className="text-3xl sm:text-4xl md:text-5xl shrink-0 hover:opacity-75 transition-opacity" />
                </Link>

            </div>
        </div>
    )
}