import { useRouter } from 'next/router';
import React from 'react';

const PostDetails = ({ post }) => {
    const router = useRouter();

    const handleBackToPosts = () => {
        router.push('/posts');
    }
    return (
        <div className="card w-3/4 mx-auto my-20 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{post?.title}</h2>
                <p>Post: {post?.body}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleBackToPosts} className="btn btn-primary">Back to Posts</button>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;

export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await res.json();
    return {
        props: {
            post: data
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
    const posts = await res.json();

    const paths = posts.map(post => {
        return {
            params: {
                postId: `${post?.id}`
            }
        }
    });
    return {
        paths,
        fallback: false
    }
}