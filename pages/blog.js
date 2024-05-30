import BlogPost from "../components/BlogPost.js";
import posts from "../public/posts.json";
import Head from "next/head";

function Blog() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {posts.map((post, index) => (
        <BlogPost
          key={index}
          title={post.title}
          date={post.date}
          author={post.author}
          content={post.content}
          imageSrc={post.imageSrc}
          index={index}
        />
      ))}
    </div>
  );
}

export default Blog;
