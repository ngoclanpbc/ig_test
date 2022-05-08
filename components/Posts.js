import Post from "./Post";
const posts = [
    {
        id: '1231',
        username: 'lan',
        userImg: 'https://bom.so/XSeNRm',
        img: 'https://bom.so/9Yr3kx',
        caption: 'like'

    },
    {
        id: '2',
        username: 'lan',
        userImg: 'https://avatars.githubusercontent.com/u/24712956?v=4',
        img: 'https://bom.so/9Yr3kx',
        caption: 'like'

    },
    {
        id: '3',
        username: 'lan',
        userImg: 'https://bom.so/RtpQYz',
        img: 'https://bom.so/9Yr3kx',
        caption: 'like'

    },
]
function Posts() {
    return (
        <div>
            {posts.map((post) =>(
                <Post 
                key={post.id} 
                id= {post.id}
                username= {post.username}
                userImg= {post.userImg}
                img ={post.img}
                caption = {post.caption}
                />
            ))}
            
        </div>
    )
}

export default Posts