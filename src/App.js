import React from "react";
import { Create, Notes } from "./Pages";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Notes />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
};

export default App;
