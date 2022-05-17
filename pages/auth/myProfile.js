import { getProviders, signIn as SingIntoProvider } from "next-auth/react"
import Header from "../../components/Header";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { cloneElement, useEffect, useState } from "react";
import MyPost from "../../components/MyPost";
import { db } from "../../firebase";
import { useSession } from "next-auth/react";

export default function myProfile() {
  const [posts,setPosts] = useState([]);
  const {data : session} = useSession();
  useEffect(
    () =>  onSnapshot(query(collection(db, 'posts'),orderBy('timestamp','desc')),
     snapshot => {
       
        setPosts(snapshot.docs);
    })
    

, [db]);
//console.log(posts);
  return (
    <>
    <Header />
    <div 
    // className="flex flex-col items-center 
    // justify-center
    // min-h-screen py-2 -mt-56 px-14 text-center"
    >
      
    <div className="mt-40">
    



    <div className="grid grid-cols-3 bg-white my-7
        rounded-sm space-x-5 justify-between ml-10 mx-5">
        {posts.map((post) =>(
          session.user.username === post.data().username &&
          (<MyPost 
            key={post.id} 
            id= {post.id}
            username= {post.data().username}
            userImg= {post.data().profileImg}
            img ={post.data().image}
            caption = {post.data().caption}
            />)
            
        ))}
        
    </div>

    
    </div>
     

    </div>
    
    </>
  )
}

