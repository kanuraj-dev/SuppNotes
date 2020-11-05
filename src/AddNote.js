import {
  AppBar,
  Button,
  Dialog,
  IconButton,
  makeStyles,
  Slide,
  TextField,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Add, ArrowBack } from "@material-ui/icons";
import React, { useState } from "react";
import "./AddNote.css";
import { useStateValue } from "./StateProvider";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Styling TextField
const useStyles = makeStyles({
  textField: {
    width: "100%",
    marginTop: "15px",
  },
  input: {
    color: "inherit",
    letterSpacing: "0.01428571em",
    fontFamily: "Roboto, Arial, sans-serif !important",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontWeight: 500,
    paddingLeft: "5px",
    color: "#202124",
  },
});

function AddNote() {
  const theme = useTheme();
  const classes = useStyles();

  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  //   UseState
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [inputTitleError, setInputTitleError] = useState(false);
  const [inputContentError, setInputContentError] = useState(false);
  // datalayer
  const [{ notes }, dispatch] = useStateValue();

  const errorRequired = "All field are required";

  const addNoteBtnClick = () => {
    setInputTitleError(title == "" ? true : false);
    setInputContentError(content == "" ? true : false);
    if (title != "" || content != "") {
      dispatch({
        type: "ADD_NOTE",
        note: {
          title: title,
          content: content,
          dateTime: new Date().toLocaleString(),
        },
      });
      setTitle("");
      setContent("");
      setOpen(false);
    }
  };

  const onTitleInputChange = (e) => {
    setTitle(e.target.value);
  };
  const onContentInputChange = (e) => {
    setContent(e.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="addNote">
      <Add className="addNote__button" onClick={handleClickOpen} />
      <Dialog
        fullScreen={fullScreen}
        fullWidth
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        className="addNote__dialog"
      >
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <ArrowBack />
            </IconButton>
            <Typography variant="h5">Add Note</Typography>
          </Toolbar>
        </AppBar>
        <div className="addNote__dialogBody">
          <TextField
            error={inputTitleError}
            helperText={inputTitleError && errorRequired}
            required
            className={classes.textField}
            id="standard-required"
            label="Note Title"
            spellCheck="false"
            onChange={onTitleInputChange}
            value={title}
            InputProps={{
              className: classes.input,
            }}
          />
          <TextField
            error={inputContentError}
            helperText={inputContentError && errorRequired}
            id="standard-textarea"
            label="Note Content"
            className={classes.textField}
            required
            placeholder="Write your Note..."
            multiline
            spellCheck="false"
            onChange={onContentInputChange}
            value={content}
            InputProps={{
              className: classes.input,
            }}
          />
          <Button
            className="addNote__dialogBtn"
            variant="contained"
            size="small"
            onClick={addNoteBtnClick}
          >
            <Add />
            Add
          </Button>
        </div>
      </Dialog>
    </div>
  );
}

export default AddNote;
