import { BsColumnsGap } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function NavBar(){

    return(
        <div className="flex p-7 items-center justify-around">
            <div className="">
                {/* smth logo */}
                <p>Pokemon</p>
            </div>

            <div className="">
                
            </div>

            <div className="flex items-center gap-20">
                <Link to='/'>
                <IoHome />
                </Link>

                <Link to='/pokemons'>
                    <div className="flex items-center gap-3 text-[#F4C430] hover:underline">
                        <BsColumnsGap />
                        <p>All Pokemon</p> 
                    </div>
                </Link>
            </div>
        </div>
    )
} 