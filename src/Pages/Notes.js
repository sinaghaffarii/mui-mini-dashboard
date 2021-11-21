import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import CreateNote from "../Components/CreateNote";
import axios from "axios";
import Masonry from "react-masonry-css";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/notes").then((res) => setNotes(res.data));
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/notes/${id}`);

    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <div key={note.id}>
            <CreateNote note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
};

export default Notes;
