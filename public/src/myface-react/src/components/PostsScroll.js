import { Post } from "./Post";
import './Styles/PostsScroll.scss'

export function PostsScroll({ title, posts }) {
    return (
        <div>
            <p className='posts-scroll-title'>{title}</p>
            <ul className='posts-scroll-container'>
                {posts.map((post) =>
                    <Post 
                    createdAt={post.createdAt}
                    id={post.id}
                    imageUrl={post.imageUrl} 
                    message={post.message}
                    className='post-thumbnail' />
                )}
            </ul>
        </div>
    )
}