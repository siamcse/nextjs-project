import React from 'react';
import Post from '../../Components/Post/Post';

const Posts = ({posts}) => {
    console.log(posts);
    return (
        <div className='w-3/4 mx-auto'>
            <h1 className='text-3xl'>There are {posts.length} posts.</h1>
            {
                posts.map(post=><Post key={post.id} post={post}></Post>)
            }

        </div>
    );
};

export default Posts;

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
    const data = await res.json();
    return {
        props: {
            posts: data
        }
    }
}