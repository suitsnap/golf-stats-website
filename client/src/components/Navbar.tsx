import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Redirect to the PlayerPage with the specified username
    navigate(`/player/${searchValue}`);
  };

  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="http://localhost:3000"
            style={{ fontSize: "1.5rem" }}
          >
            <img
              src="/src/assets/golfstats.png"
              alt="Logo"
              width="34"
              height="34"
              className="d-inline-block align-text-top"
            />
            Golfstats
          </a>
          <form className="d-flex" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Find Player
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
