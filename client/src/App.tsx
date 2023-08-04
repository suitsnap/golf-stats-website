
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PlayerPage from "./components/PlayerPage";
import axios from "axios";

function App() {
  const [data, setData] = useState();
  const urlWithProxy = "/api/v1";

  function getDataFromServer() {
    axios
      .get(urlWithProxy)
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Homepage Route */}
          <Route path="/" element={<div>Homepage</div>} />

          {/* Player Page Route */}
          <Route path="/player/:username" element={<PlayerPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
