import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import JumpLinkButton from "./JumpLinkButton";
import { useTheme } from "@mui/material/styles";

function Hero({ imageSrc, children }) {
  const theme = useTheme();

  const childrenArray = [
    <Box key="intro" sx={{ display: "inline" }}>
      <Typography variant="body1" sx={{ display: "inline",  }}>
        {" "}
        My Name Is{" "}
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontWeight: "bold", display: "inline",  }}
      >
        Bryan Emerson
      </Typography>
    </Box>,
    <Typography
      variant="h1"
      key="description"
      sx={{ width: { xs: "80%", sm: "100%" } }}
    >
      I&apos;m a Frontend Developer
    </Typography>,
    <Typography
      variant="body1"
      key="description"
      sx={{ width: { xs: "80%", sm: "100%" }, }}
    >
      with 2 years of professional experience. I strive to make bold, simple, user friendly solutions with React and
      javascript.
    </Typography>,
    <JumpLinkButton href="#work" key="button">
      View Work
    </JumpLinkButton>,
  ];

  return (
    <Box
      sx={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: {
          xs: "63%",
          sm: "74%",
        },
        alignItems: {
          xs: "center",
          sm: "center",
          md: "center",
        },
        height: "100vh",
        display: "flex",
        justifyContent: "flex-start",
        paddingLeft: "2rem",
        color: "white",
      }}
    >
      <Grid
        container
        item
        xs={12}
        md={6}
        sx={{ pt: { xs: "30vh", sm: "40vh", md: "0vh" } }}
      >
        <Box
          sx={{
            position: "relative", // Ensure the overlay is positioned relative to this box
            mt: { xs: "-60vh", sm: "0" },
            width: { xs: "50%", sm: "80%" },
          }}
        >
          {/* Overlay for mobile devices */}
          <Box
            sx={{
              display: { xs: "block", sm: "block", md: "none" }, // Only show on mobile
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.05)", // Semi-transparent black background
              borderRadius: "8px",
              zIndex: 1, // Ensure the overlay is below the content
              height: {xs: '75%', sm: '100%'},
            }}
          />
          {/* Content Box */}
          <Box
            sx={{
              position: "relative", // Ensure the content is positioned relative to the overlay
              padding: "1rem",
              borderRadius: "8px",
              zIndex: 2, // Ensure the content is above the overlay
            }}
          >
            {childrenArray.map((child, index) => (
              <Grid item xs={12} key={index}>
                {child}
              </Grid>
            ))}
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}

export default Hero;

