import React from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import styles from "@/styles/card.module.css";
import Chip from "@mui/material/Chip";

function Card(props) {
  return (
    <>
      <div className={styles.card}>
        <Image
          src={props.projObj.image}
          alt="screenshot of app"
          layout="responsive"
          width={600}
          height={356}
          disablegutters
        />
        <Box
          sx={{
            display: "flex", // Enables flexbox layout
            flexWrap: "wrap", // Allows items to wrap onto multiple lines
            alignItems: "center", // Aligns items vertically in the center
            gap: 1, // Adds a gap between items
          }}
        >
          {props.projObj.stack.map((tech, index) => (
            <React.Fragment key={index}>
              <Typography>{tech}</Typography>
              {index < props.projObj.stack.length - 1 && (
                <Typography sx={{ mx: 0.2 }}>/</Typography>
              )}
            </React.Fragment>
          ))}
        </Box>
        <Typography variant="h4">{props.projObj.name}</Typography>
        <Accordion sx={{ boxShadow: 'none', '&:before': { display: 'none' }, mt: "1rem" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Read More</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {props.projObj.details}

            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}

export default Card;