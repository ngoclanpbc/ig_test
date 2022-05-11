import { faker } from '@faker-js/faker';
//import { Session } from 'inspector';
//import { profile } from 'console';
//import { profile } from 'console';
import { useEffect, useState } from "react";
import Story from "./Story";
import { useSession } from 'next-auth/react';
function Stories() {
    const {data :session} =useSession();
    // const [suggestions, setSuggestion] = useState([]);
    // useEffect(() => {
    //     const suggestions = [...Array(20)].map((_, i) => ({
             
    //          avatar: faker.image.avatar(),
    //          name: faker.name.firstName(),
    //          id: i,
    //         // avatar: "https://scontent.fhph1-3.fna.fbcdn.net/v/t1.6435-9/175883935_2525472351094141_4969572872366525039_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9e6sfF7bjrsAX9EQKHg&_nc_ht=scontent.fhph1-3.fna&oh=00_AT-aUng0tgfpCDoa6g8vSOLBfyslAzB_4CVqzuYDzIFO2A&oe=629790EE"
            
    //     })
    //     );
    //     console.log(suggestions);
        
    // }, []);
    
   

    return (
        <div className='flex space-x-2 p-6 
        bg-white mt-8 
        border-gray-200
         border rounded-sm
         overflow-x-scroll scrollbar-thin 
         scrollbar-thumb-black
         position: relative'>
            {/* {suggestions.map((profile) => (
                // <Story key={profile.id}
                // img = {profile.avatar}
                // username = {profile.name} />
                console.log(profile),
            ))} */}
            {session && (
                <Story img= {session.user.image}
                username= {session.user.username}/>
            )}
             <Story 
                // key={profile.id} 
                // img ={profile.avatar}
                // username= {profile.username}
                img = 'https://scontent.fhph1-3.fna.fbcdn.net/v/t1.6435-9/175883935_2525472351094141_4969572872366525039_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9e6sfF7bjrsAX9EQKHg&_nc_ht=scontent.fhph1-3.fna&oh=00_AT-aUng0tgfpCDoa6g8vSOLBfyslAzB_4CVqzuYDzIFO2A&oe=629790EE'
                username ='lan'
                />
            <Story 
                // key={profile.id} 
                // img ={profile.avatar}
                // username= {profile.username}
                img = 'https://scontent.fhph1-3.fna.fbcdn.net/v/t1.6435-9/175883935_2525472351094141_4969572872366525039_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9e6sfF7bjrsAX9EQKHg&_nc_ht=scontent.fhph1-3.fna&oh=00_AT-aUng0tgfpCDoa6g8vSOLBfyslAzB_4CVqzuYDzIFO2A&oe=629790EE'
                username ='lan'
                />
            <Story 
                // key={profile.id} 
                // img ={profile.avatar}
                // username= {profile.username}
                img = 'https://scontent.fhph1-3.fna.fbcdn.net/v/t1.6435-9/175883935_2525472351094141_4969572872366525039_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9e6sfF7bjrsAX9EQKHg&_nc_ht=scontent.fhph1-3.fna&oh=00_AT-aUng0tgfpCDoa6g8vSOLBfyslAzB_4CVqzuYDzIFO2A&oe=629790EE'
                username ='lan'
                />
            <Story 
                // key={profile.id} 
                // img ={profile.avatar}
                // username= {profile.username}
                img = 'https://scontent.fhph1-3.fna.fbcdn.net/v/t1.6435-9/175883935_2525472351094141_4969572872366525039_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9e6sfF7bjrsAX9EQKHg&_nc_ht=scontent.fhph1-3.fna&oh=00_AT-aUng0tgfpCDoa6g8vSOLBfyslAzB_4CVqzuYDzIFO2A&oe=629790EE'
                username ='lan'
                />
            <Story 
                // key={profile.id} 
                // img ={profile.avatar}
                // username= {profile.username}
                img = 'https://scontent.fhph1-3.fna.fbcdn.net/v/t1.6435-9/175883935_2525472351094141_4969572872366525039_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9e6sfF7bjrsAX9EQKHg&_nc_ht=scontent.fhph1-3.fna&oh=00_AT-aUng0tgfpCDoa6g8vSOLBfyslAzB_4CVqzuYDzIFO2A&oe=629790EE'
                username ='lan'
                />
            <Story 
                // key={profile.id} 
                // img ={profile.avatar}
                // username= {profile.username}
                img = 'https://scontent.fhph1-3.fna.fbcdn.net/v/t1.6435-9/175883935_2525472351094141_4969572872366525039_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9e6sfF7bjrsAX9EQKHg&_nc_ht=scontent.fhph1-3.fna&oh=00_AT-aUng0tgfpCDoa6g8vSOLBfyslAzB_4CVqzuYDzIFO2A&oe=629790EE'
                username ='lan'
                />
            <Story 
                // key={profile.id} 
                // img ={profile.avatar}
                // username= {profile.username}
                img = 'https://scontent.fhph1-3.fna.fbcdn.net/v/t1.6435-9/175883935_2525472351094141_4969572872366525039_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9e6sfF7bjrsAX9EQKHg&_nc_ht=scontent.fhph1-3.fna&oh=00_AT-aUng0tgfpCDoa6g8vSOLBfyslAzB_4CVqzuYDzIFO2A&oe=629790EE'
                username ='lan'
                />
            <Story 
                // key={profile.id} 
                // img ={profile.avatar}
                // username= {profile.username}
                img = 'https://scontent.fhph1-3.fna.fbcdn.net/v/t1.6435-9/175883935_2525472351094141_4969572872366525039_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9e6sfF7bjrsAX9EQKHg&_nc_ht=scontent.fhph1-3.fna&oh=00_AT-aUng0tgfpCDoa6g8vSOLBfyslAzB_4CVqzuYDzIFO2A&oe=629790EE'
                username ='lan'
                />
            <Story 
                // key={profile.id} 
                // img ={profile.avatar}
                // username= {profile.username}
                img = 'https://scontent.fhph1-3.fna.fbcdn.net/v/t1.6435-9/175883935_2525472351094141_4969572872366525039_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9e6sfF7bjrsAX9EQKHg&_nc_ht=scontent.fhph1-3.fna&oh=00_AT-aUng0tgfpCDoa6g8vSOLBfyslAzB_4CVqzuYDzIFO2A&oe=629790EE'
                username ='lan'
                />
            <Story 
                // key={profile.id} 
                // img ={profile.avatar}
                // username= {profile.username}
                img = 'https://scontent.fhph1-3.fna.fbcdn.net/v/t1.6435-9/175883935_2525472351094141_4969572872366525039_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9e6sfF7bjrsAX9EQKHg&_nc_ht=scontent.fhph1-3.fna&oh=00_AT-aUng0tgfpCDoa6g8vSOLBfyslAzB_4CVqzuYDzIFO2A&oe=629790EE'
                username ='lan'
                />
                
        </div>
    )
}
export default Stories