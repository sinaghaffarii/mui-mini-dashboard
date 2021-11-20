import React from "react";
import { Create, Notes } from "./Pages";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Layout>
  );
};

export default App;
