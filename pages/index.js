import Link from "next/link";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";

export default function Home({ posts }) {
  return (
    <div>
      <Banner />
      <div className='w-3/4 mx-auto text-center'>
        {
          posts.map(post => <div key={post.id} className="card my-10 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p>{post?.body}</p>
            </div>
          </div>)
        }
        <Link href="/posts">
          <button className="btn btn-primary text-center">See More</button>
        </Link>

      </div>
      <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=4");
  const data = await res.json();
  return {
    props: {
      posts: data
    }
  }
}
