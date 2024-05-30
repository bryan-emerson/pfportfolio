import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Grid,
  Typography,
  Button,
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import JumpLinkButton from './JumpLinkButton';
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Experience = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        p: "2rem",
        backgroundColor: theme.palette.secondary.main,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">Highlights</Typography>
          <Typography variant="h4">Experience</Typography>
          <Typography variant="body1">Practice Makes Perfect</Typography>
          <JumpLinkButton href="#work" key="button">VIEW RESUME</JumpLinkButton>
        </Grid>
        <Grid item xs={12} md={6}>
          <Divider orientation="horizontal" sx={{ my: "1rem" }} />
          <Box>
            <Typography variant="h6">Frontend Software Developer</Typography>
            <Typography variant="body2">Know My Menu</Typography>
            <Typography variant="body2">July 2023 - Current</Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="body1">Item 1</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="body1">Item 2</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="body1">Item 3</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="body1">Item 4</Typography>
              </ListItem>
            </List>
          </Box>
          <Divider orientation="horizontal" sx={{ my: "1rem" }} />
          <Box>
            <Typography variant="h6">PLM Software Developer</Typography>
            <Typography variant="body2">
              Laborie Medical Technologies
            </Typography>
            <Typography variant="body2">APR 2012 - Mar 2022</Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="body1">Item 1</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="body1">Item 2</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="body1">Item 3</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="body1">Item 4</Typography>
              </ListItem>
            </List>
          </Box>
          <Divider orientation="horizontal" sx={{ my: "1rem" }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Experience;
