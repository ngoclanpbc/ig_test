import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { cloneElement, useEffect, useState } from "react";
import Post from "./Post";
import { db } from "../firebase";
import { Snapshot } from "recoil";

// const posts = [
//     {
//         id: '1231',
//         username: 'lan',
//         userImg: 'https://bom.so/XSeNRm',
//         img: 'https://bom.so/9Yr3kx',
//         caption: 'like'

//     },
//     {
//         id: '2',
//         username: 'lan',
//         userImg: 'https://avatars.githubusercontent.com/u/24712956?v=4',
//         img: 'https://bom.so/9Yr3kx',
//         caption: 'like'

//     },
//     {
//         id: '3',
//         username: 'lan',
//         userImg: 'https://bom.so/RtpQYz',
//         img: 'https://bom.so/9Yr3kx',
//         caption: 'like'

//     },
// ]
function Posts() {
    const [posts,setPosts] = useState([]);

    useEffect(
        () =>  onSnapshot(query(collection(db, 'posts'),orderBy('timestamp','desc')),
         snapshot => {
            setPosts(snapshot.docs);
        })
        

    , [db]);

    console.log(posts);
    return (
        <div>
            {posts.map((post) =>(
                <Post 
                key={post.id} 
                id= {post.id}
                username= {post.data().username}
                userImg= {post.data().profileImg}
                img ={post.data().image}
                caption = {post.data().caption}
                userId = {post.data().userId}
                />
            ))}
            
        </div>
    )
}

export default Posts