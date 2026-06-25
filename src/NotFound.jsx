import { Link } from "react-router-dom"

export default function NotFound(){

    return(
        <div className="flex flex-col items-center justify-center h-screen px-4 text-center">

            <p className="text-6xl sm:text-8xl font-bold mb-4">404</p>

            <p className="text-base sm:text-lg md:text-xl font-semibold max-w-sm sm:max-w-md mb-6">
                How did u even get here. Please go back, there is nothing for you here.
            </p>

            <Link to='/'>
                <button className="px-6 py-2 border-2 border-[#F4C430] rounded-2xl text-base hover:bg-[#F4C430] hover:text-[#060B19] transition-colors">
                    Go Home
                </button>
            </Link>

        </div>
    )
}