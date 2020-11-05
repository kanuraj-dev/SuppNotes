import React from "react";
import "./Body.css";
import AddNote from "./AddNote";
import Notes from "./Notes";

function Body() {
  return (
    <div className="body">
      <AddNote />
      <Notes />
    </div>
  );
}

export default Body;
