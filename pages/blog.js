import BlogPost from "../components/BlogPost.js";
import posts from "../public/posts.json";
import Head from "next/head";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Footer from "../components/footer.js";
import Divider from "@mui/material/Divider";

function Blog() {
  return (
    <div>
      <Box margin="2rem">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Typography variant="h2" >
        Things I do at work
      </Typography>
      <Divider />
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
      </Box>
      <Footer />
    </div>
  );
}

export default Blog;
