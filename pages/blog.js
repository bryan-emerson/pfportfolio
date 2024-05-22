import BlogPost from '../components/BlogPost.js';

const posts = [
  {
    title: "My First Blog Post",
    date: "October 1, 2022",
    author: "John Doe",
    content: "This is the content of my first blog post.",
    imageSrc: "/path/to/image.jpg"
  },
  {
    title: "My 2nd Blog Post",
    date: "October 1, 2022",
    author: "John Doe",
    content: "This is the content of my first blog post.",
    imageSrc: "/path/to/image.jpg"
  },
  {
    title: "My 3rd Blog Post",
    date: "October 1, 2022",
    author: "John Doe",
    content: "This is the content of my first blog post.",
    imageSrc: "/path/to/image.jpg"
  },
  // More posts...
];

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