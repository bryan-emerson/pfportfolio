import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function BlogPost({ title, date, author, content, imageSrc, index }) {
  return (
    <Grid container spacing={2} sx={{ marginBottom: '2rem' }}>
      <Grid item xs={12} md={6} order={index % 2 === 0 ? 1 : 2}>
        <Image src={imageSrc} alt={title} width={500} height={300} />
      </Grid>
      <Grid item xs={12} md={6} order={index % 2 === 0 ? 2 : 1}>
        <Typography variant="h2" sx={{ marginBottom: '1rem' }}>{title}</Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: '1rem' }}>{date} by {author}</Typography>
        <Typography variant="body1">{content}</Typography>
      </Grid>
    </Grid>
  );
}

export default BlogPost;