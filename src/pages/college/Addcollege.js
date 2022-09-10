import React from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

import "./Addcollege.css";

export default function Addcollege() {
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
              <Link to="/College" className="link">
                <Button>Home</Button>
              </Link>
              <Link to="/Cant" className="link">
                <Button>Canteen</Button>
              </Link>
              <Link to="/StatHome" className="link">
                <Button>Stationary</Button>
              </Link>
              </li>
            </div>
          </div>
          <div className="contents">
            <div className="Main">
              <div className="LeftP">
                <img
                  src={require("./Images/AddCollege.png")}
                  alt="add"
                  className="add"
                />
              </div>  
              <div className="RightP">
                <Box className="contentBox">
                  <div className="contentHead">COLLEGE INFO.</div>
                  <div className="names">
                    <Box
                      component="form"
                      sx={{
                        "& .MuiTextField-root": { m: 1, width: "22ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <div>
                        <TextField
                          className="typebox"
                          id="filled-search"
                          label="NAME"
                          type="text"
                          variant="filled"
                        />
                      </div>
                      <div>
                        <TextField
                          className="typebox"
                          id="filled-search"
                          label="COLLEGE ID"
                          type="text"
                          variant="filled"
                        />
                      </div>
                      <div>
                        <TextField
                          className="typebox"
                          id="filled-search"
                          label="COLLEGE ADDRESS"
                          type="text"
                          variant="filled"
                        />
                      </div>
                      <div>
                        <TextField
                          className="typebox"
                          id="filled-search"
                          label="COLLEGE PINCODE"
                          type="text"
                          variant="filled"
                        />
                      </div>
                    </Box>
                  </div>
                  <div className="password">
                    <Box sx={{ display: "flex", flexWrap: "wrap" }}></Box>
                  </div>
                  <div>
                    <Button variant="contained" className="addButton">
                      ADD
                    </Button>
                  </div>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  