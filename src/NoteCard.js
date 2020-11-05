import { AppBar, Dialog, IconButton, Paper, Toolbar } from "@material-ui/core";
import { ArrowBack, Delete } from "@material-ui/icons";
import React, { useState } from "react";
import "./NoteCard.css";
import { useStateValue } from "./StateProvider";

function NoteCard({ id, title, content, dateTime }) {
  const [open, setOpen] = useState(false);
  const [{ notes }, dispatch] = useStateValue();

  //   Remove Note Function
  const removeNote = () => {
    dispatch({
      type: "REMOVE_NOTE",
      note: {
        id: id,
      },
    });
  };

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="noteCard">
      <Paper
        variant="outlined"
        onClick={handleClickOpen}
        className="noteCard__container"
      >
        <p className="noteCard__title">{title}</p>
        <p className="noteCard__content">{truncate(content, 150)}</p>
      </Paper>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        className="addNote__dialog"
      >
        <AppBar color="default" position="sticky" variant="outlined">
          <Toolbar style={{ justifyContent: "space-between" }}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <ArrowBack />
            </IconButton>
            <IconButton
              edge="end"
              color="inherit"
              onClick={removeNote}
              aria-label="close"
            >
              <Delete />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className="noteCard__dialogBody">
          <p className="noteCard__title">{title}</p>
          <p className="noteCard__content">{content}</p>
        </div>
      </Dialog>
    </div>
  );
}

export default NoteCard;
