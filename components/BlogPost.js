import Image from "next/legacy/image";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function BlogPost({ title, date, author, content, imageSrc, index }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const imageSize = isSmallScreen ? 300 : 500;

  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginBottom: '2rem',
        marginTop: '2rem',
        backgroundColor: index % 2 === 0 ? '#ffffff' : '#f7f7f7',
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        order={isSmallScreen ? 1 : index % 2 === 0 ? 1 : 2}
        container
        alignItems="center"
      >
        <Image src={imageSrc} alt={title} width={imageSize} height={imageSize * 0.6} />
      </Grid>
      <Grid item xs={12} md={6} order={isSmallScreen ? 2 : index % 2 === 0 ? 2 : 1}>
        <Typography variant="h2" sx={{ marginBottom: '1rem' }}>
          {title}
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: '1rem' }}>
          {date} by {author}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '2rem' }}>
          {content}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default BlogPost;
