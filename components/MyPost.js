import { async } from "@firebase/util";
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon,
} from "@heroicons/react/outline";

import {HeartIcon as HeartIconFilled} from 
"@heroicons/react/solid";
import { addDoc, collection,deleteDoc,doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import {db} from "../firebase";
import Moment from "react-moment";

function MyPost({id,username,userImg,img,caption}) {
    const {data : session} = useSession();
    
    return (
        
        <div className=" bg-white my-7 border
        rounded-sm " 
        // style={
        //     margin: 20px auto;
        //     display: grid;
        //     grid-template-columns: 1fr 1fr 1fr;
        //     grid-gap: 40px;
        // }
        >
            
           
            { 
            (
                <img src={img} 
                className="object-cover w-full h-full" 
                alt="" />

            )}
            
            {/* <div> {session.user.username} {username}</div> */}
           
        </div>
    )
}

export default MyPost;