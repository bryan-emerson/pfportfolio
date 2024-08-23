import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Image from "next/legacy/image";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";

import styles from "@/styles/card.module.css";
import Chip from "@mui/material/Chip";

import Button from "@mui/material/Button";
import JumpLinkButton from "./JumpLinkButton";

function Card(props) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Box sx={{ my: "1rem" }}>
        <Image
          src={props.projObj.image}
          alt="screenshot of app"
          layout="responsive"
          width={600}
          height={356}
          disablegutters='true'
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
        <JumpLinkButton variant="contained" handleOpen={handleOpen}>
          Read More
        </JumpLinkButton>
        <Modal
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: { xs: "70%", sm: "70%", md: "50%", lg: "45%" },
                bgcolor: "background.paper",
                border: "2px solid #000",
                boxShadow: 24,
                p: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                {props.projObj.name}
              </Typography>
              <Typography variant='body1' id="transition-modal-info" sx={{ mt: 2, fontSize: { xs: '0.7rem', sm: '0.875rem' }, overflowY: 'auto', maxHeight: '200px' }}>
                {props.projObj.info}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  mt: 2,
                }}
              >
                {props.projObj.url && (
                  <JumpLinkButton
                    href={props.projObj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go To Site
                  </JumpLinkButton>
                )}
                {props.projObj.git && (
                  <JumpLinkButton
                    href={props.projObj.git}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Repo
                  </JumpLinkButton>
                )}
              </Box>
            </Box>
          </Fade>
        </Modal>
      </Box>
    </div>
  );
}

export default Card;
