import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import NoteCard from "./NoteCard";
import "./Notes.css";
import { useStateValue } from "./StateProvider";

const searchNote = (searchTerm, myArray) => {
  let tempArray = [];
  myArray?.map((item) => {
    if (item.title.includes(searchTerm) || item.content.includes(searchTerm)) {
      tempArray.push(item);
    }
  });
  return tempArray;
};
function Notes() {
  const [{ notes, search }, dispatch] = useStateValue();
  const [notesObj, setNotesObj] = useState(notes);

  // set notes = search result... when search term is changed
  useEffect(() => {
    if (search !== "") {
      setNotesObj(searchNote(search, notes));
    } else {
      setNotesObj(notes);
    }
  }, [search]);

  return (
    <div className="notes">
      <Grid container fluid>
        {notesObj?.length ? (
          notesObj?.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <NoteCard
                id={index}
                title={item.title}
                content={item.content}
                dateTime={item.dateTime}
              />
            </Grid>
          ))
        ) : (
          <NoteCard
            title="❌ No Results Found"
            content="Sorry we can't find anything matching to your search term"
          />
        )}
      </Grid>
    </div>
  );
}

export default Notes;
