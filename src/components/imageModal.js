import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Hours from "../images/opening.png";
import styled from "styled-components";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Image = styled.img`
    width: 90vw;
`;

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} color="inherit">Check our holiday opening hours</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Image src={Hours} alt="Tish Faco opening hours" width="90vw" />
        </Box>
      </Modal>
    </div>
  );
}
