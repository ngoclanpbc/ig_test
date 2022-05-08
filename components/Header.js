import Image from "next/image";
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
} from "@heroicons/react/outline";
import {HomeIcon} from "@heroicons/react/solid";
import { useSession } from "next-auth/react";

function Header() {
    const {data : session} = useSession();

    console.log(session);
    return(
        <div className="shadow-sm border-b bg-white sticky top-0 z-50" >
            <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
                {/* Left */}
                <div className="relative hidden lg:inline-grid w-24">
                    <Image src="http://links.papareact.com/ocw" 
                    layout="fill" 
                    objectFit="contain"
                    />
                </div>
                
                <div className="relative w-10 lg:hidden flex-shink-0
                cursor-pointer">
                <Image src="http://links.papareact.com/jjm" 
                    layout="fill" 
                    objectFit="contain"
                    />
                </div>

                {/* Middle - Search input field*/}
                <div className="max-w-xs">
                <div className="relative mt-1 p-3 rounded-md">
                    <div className="absolute inset-y-0 pl-3 flex items-center
                     pointer-events-none">
                        <SearchIcon className="h-5 w-5 text-gray-500"/>
                    </div>
                    <input className="bg-gray-50 block w-full pl-10 sm:text-sm 
                     border-gray-300 focus:ring-black focus:border-black rounded-md"
                     type='text' 
                     placeholder="Search" 
                    />

                </div>
                </div>
                
                {/* Right */}
                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon className="navBtn" />
                    <MenuIcon className="h-6 md:hidden cursor-pointer" />
                    <div className="relative navBtn">
                        <PaperAirplaneIcon className="navBtn rotate-45"/>
                        <div className="absolute -top-2 -right-1 text-xs w-5 h-5
                        bg-red-500 rounded-full flex items-center justify-center
                         animate-pulse text-white" >
                             3

                        </div>
                    </div>
                    
                    <PlusCircleIcon className="navBtn" />
                    <UserGroupIcon className="navBtn" />
                    <HeartIcon className="navBtn"/>

                    <img 
                    src="https://scontent.fhph1-2.fna.fbcdn.net/v/t1.6435-9/175883935_2525472351094141_4969572872366525039_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9e6sfF7bjrsAX8BFcX7&_nc_ht=scontent.fhph1-2.fna&oh=00_AT85LPNSoBOrQ9-inXFIBsEJ9FBMJRo_lG3hd7l1eGkbmQ&oe=629790EE" 
                    alt="profile pic"
                    className="h-10 rounded-full cursor-pointer" />
                </div>

            </div>
            
        </div>
    )
}

export default Header;