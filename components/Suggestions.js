import { useEffect, useState } from "react";
import Suggestion from "./Suggestion";
const suggestions = [
    {
        id: "1",
        name: 'Eveline',
        username: 'Eveline.Brekke56',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/122.jpg',
        email: 'Eveline.Brekke56.Hoppe@yahoo.com',
    },
    {
        id: "2",
        name: 'Eveline',
        username: 'Eveline.Brekke56',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/122.jpg',
        email: 'Eveline.Brekke56.Hoppe@yahoo.com',
    },
    {
        id: "3",
        name: 'Eveline',
        username: 'Eveline.Brekke56',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/122.jpg',
        email: 'Eveline.Brekke56.Hoppe@yahoo.com',
    },

]
function Suggestions() {
    // const [suggestions, setSuggestions] = useState([]);

    // useEffect(()=> {
    //     const suggestions = [...Array(5)]
    //     .map((_,i)=>(
    //         {
    //             {
    //                 name: 'Eveline',
    //                 username: 'Eveline.Brekke56',
    //                 avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/122.jpg',
    //                 email: 'Eveline.Brekke56.Hoppe@yahoo.com',
    //             },
    //             id: i,     
    //         }
    //     ))
    //     setSuggestions(suggestions);
    // },[])
    
    return (
        <div className="mt-4 ml-10">
            <div className="flex justify-between
            text-sm mb-5">
                <h3 className="text-sm font-bold
                text-gray-400">Suggestions for you</h3>
                <button 
                 className="text-gray-600 font-semibold">
                    See all
                </button>

            </div>
            <div>
            {suggestions.map((suggestion) =>(
                <Suggestion
                key= {suggestion.id}
                id={suggestion.id} 
                username ={suggestion.username}
                avatar= {suggestion.avatar}
                />
            ))}
            
        </div>
            
            
        </div>
    )
}
export default Suggestions;