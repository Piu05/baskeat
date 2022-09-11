import React from "react";
import { Button } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import { useState } from "react";
import data from "./Clgdata.json";
import "./Clgsearch.css";

export default function Clgsearch() {
  const [query, setQuery] = useState("");
  const [state, setState] = useState(false);
  function Click() {
    setState(!state);
  }
  return (
    <>
      <div className="container">
        <div className="Navbar text-center">
          <div className="NavLogo">
          <Link to="/College" className="link">
            <img
              src={require("../canteen/BaskEat.png")}
              alt="baskEat"
              className="Logo"
            />
          </Link>
          </div>

          <div className="Navbtns">
            <li>
            <Link to="/College" className="Addlink">
              <Button>Home</Button>
            </Link>
            <Link to="/Cant" className="Addlink">
              <Button>Canteen</Button>
            </Link>
            <Link to="/stathome" className="Addlink">
              <Button>Stationary</Button>
            </Link>
            {/* <Link to="/" className="Addlink"> */}
              <Button>Logout</Button>
            {/* </Link> */}
            </li>
          </div>
        </div>
        <div className="content">
          <img
            src={require("./Images/Background.png")}
            alt="Background"
            className="search-bg"
          />
          <div className="canteen">
            <Link to="/Cant">
            <Card sx={{ maxWidth: 500 }} className="canteenpic">
              <CardMedia
                component="img"
                height="280"
                image={require("./Images/Canteen.png")}
                alt="Canteen"
              />
            </Card>
            </Link>
          </div>
          
          <div className="Stat">
            <Link to="/stathome">
            <Card sx={{ maxWidth: 500 }} className="Statpic">
              <CardMedia
                component="img"
                height="280"
                image={require("./Images/Stationery.png")}
                alt="Stationery"
              />
            </Card>
            </Link>
          </div>
          <div className="searchbar">
            <div className="searchlist">
              <input
                placeholder=" Search your College"
                type="text"
                className="search"
                onClick={Click}
                onChange={(event) => setQuery(event.target.value)}
              />
              {state &&
                data
                  .filter((post) => {
                    if (query === "") {
                      return post;
                    } else if (
                      post.clgname.toLowerCase().includes(query.toLowerCase())
                    ) {
                      return post;
                    }
                  })
                  .map((post, index) => (
                    <div className="items" key={index}>
                      <p>{post.clgname}</p>
                    </div>
                  ))}
            </div>
            <div className="searchbtn">
              <Button
                variant="contained"
                className="searchButton"
                type="submit"
              >
                <SearchIcon color="white"></SearchIcon>
              </Button>
            </div>
          </div>
          <div className="addbtn">
            <Link to="/Addcollege" className="Addlink">
            <Button variant="contained" className="Addbutton">
              Add College
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
