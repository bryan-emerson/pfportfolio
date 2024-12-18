import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Image from "next/legacy/image";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import JumpLinkButton from "./JumpLinkButton";

function Stack() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const imageSize = isSmallScreen ? 300 : 500;

  return (
    <Grid container spacing={2} sx={{}}>
      <Grid
        item
        xs={12}
        md={5}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          m: "2rem",
        }}
      >
        <Image
          src="/cave.jpg"
          alt="description"
          width={imageSize}
          height={imageSize/1.5}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pb: 2,
          }}
        >
          <Typography variant="body1">Stack / Skills</Typography>
          <Typography variant="h4">Look what I can Do</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <List sx={{ px: 2 }}>
              <Typography variant="body1">React</Typography>
              <Typography variant="body1">Next.js</Typography>
              <Typography variant="body1">Javascript</Typography>
              <Typography variant="body1">CSS</Typography>
              <Typography variant="body1">HTML</Typography>
              <Typography variant="body1">MUI</Typography>
            </List>
            <List sx={{ pl: 0 }}>
              <Typography variant="body1">AXIOS</Typography>
              <Typography variant="body1">SWR</Typography>
              <Typography variant="body1">Recoil</Typography>
              <Typography variant="body1">Vercel</Typography>
              <Typography variant="body1">GIT</Typography>
              <Typography variant="body1">JIRA</Typography>
            </List>
          </Box>
          <JumpLinkButton href="/blog">Read More</JumpLinkButton>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Stack;
