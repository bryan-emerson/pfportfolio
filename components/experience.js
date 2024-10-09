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
import JumpLinkButton from "./JumpLinkButton";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Experience = () => {
  const theme = useTheme();

  const jobs = [
    {
      title: 'Frontend Software Developer',
      company: 'Know My Menu',
      date: 'July 2023 - Current',
      responsibilities: [
        'Conducted ongoing improvement and product lifecycle maintenance of proprietary diet management app using Next.js, Vercel, React, Recoil, MUI, TypeScript, Axios, and RHF',
        'Implemented ADA Section 508 accessibility compliance using Wave, Chrome Lighthouse DevTools, WAI ARIA best practices, and WCAG 2.0 guidelines',
        'Implemented real-time data synchronization using React Recoil, SWR, and polling mechanisms to ensure the UI remained in sync with the backend',
      ],
    },
    {
      title: 'PLM Software Developer',
      company: 'Laborie Medical Technologies',
      date: 'APR 2021 - Mar 2022',
      responsibilities: [
        'Completed 14 device to EMR integrations for industry leading urology clinics using Javascript/Node.JS & HL7 resulting in $280,000 in revenue within 2 months of hire',
        'Conducted ongoing improvement and product lifecycle maintenance of proprietary medical device software and hardware using C#/.NET, Javascript,  React, and C++',
        'Provided support for sales team as Sales Engineer to secure purchases from potential customers',
      ],
    },
  ];
  return (
    <Box
      sx={{
        p: "2rem",
        backgroundColor: theme.palette.secondary.main,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography variant="h4">Experience</Typography>
            <Typography variant="body1">Practice Makes Perfect</Typography>
            <JumpLinkButton href='https://docs.google.com/document/d/12CYUXDHy1HpexCoWimkxkHj8vrJjY78ds-yaDTRAZXU/edit' key="button" target='_blank'>
              View Resume
            </JumpLinkButton>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
    {jobs.map((job, index) => (
      <Box key={index}>
        <Divider orientation="horizontal" sx={{ my: '1rem' }} />
        <Typography variant="h6">{job.title}</Typography>
        <Typography variant="body2" sx={{ my: '.5rem' }}>{job.company}</Typography>
        <Typography variant="body2">{job.date}</Typography>
        <List>
          {job.responsibilities.map((responsibility, i) => (
            <ListItem alignItems="flex-start" key={i}>
              <ListItemIcon>
                <FiberManualRecordIcon fontSize="small" />
              </ListItemIcon>
              <Typography variant="body1">{responsibility}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    ))}
    <Divider orientation="horizontal" sx={{ my: '1rem' }} />
  </Grid>
      </Grid>
    </Box>
  );
};

export default Experience;
