import BlogPost from '../components/BlogPost.js';
import posts from '../public/posts.json';



function Blog() {
  return (
    <div>
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