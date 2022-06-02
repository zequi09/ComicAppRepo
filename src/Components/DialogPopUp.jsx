import React, { forwardRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const DialogPopUp = ({ isOpenDialog, setIsOpenDialog, setShowNextComic }) => {
  const handleClose = () => {
    setIsOpenDialog(false);
  };

  const handleAgree = () => {
    setShowNextComic(true);
    setIsOpenDialog(false);
  };

  return (
    <Dialog
      open={isOpenDialog}
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle style={{ fontSize: "2rem" }}>{"Hola!"}</DialogTitle>
      <DialogContent>
        <DialogContentText style={{ fontSize: "1.5rem" }}>
          Muchas gracias por calificar este comic, hay cientos más esperando
          para ser leídos por ti.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cerrar</Button>
        <Button onClick={handleAgree}>Otro comic</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogPopUp;
