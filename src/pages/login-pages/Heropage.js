import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import "./Heropage.css";

export default function heroPage() {
  return (
    <>
      {/* main container */}
      <div className="Container">
        {/* navbar starts */}
        <div className="navbar text-center">
          <div className="navLogo">
            <Link to="/" className="link">
              <img
                src={require("./pics/BaskEat.png")}
                alt="baskEat"
                className="Logo"
              />
            </Link>
          </div>
          <div className="navbtns">
            <li>
              <Link to="/" className="link">
                <Button>LogIn</Button>
              </Link>
              <Link to="/signUp" className="link">
                <Button>SignUp</Button>
              </Link>
            </li>
          </div>
        </div>
        {/* navbar end */}

        {/* content of page starts here */}
        <div className="section">
          <img
            src={require("./pics/Cover.png")}
            alt="BgPic"
            className="BgImg"
          />

          <div className="wlcm">Welcome to baskEat</div>

          <div className="mainBtns">
            <div /*className="mainBtns"*/>
              <Link to="/adminlogin" className="link">
                <Button
                  variant="contained"
                  style={{ background: "white" }}
                  className="btnscontent"
                >
                  Admin Login
                </Button>
              </Link>
            </div>
            <div /*className="mainBtns"*/>
              <Link to="/studentlogin" className="link">
                <Button
                  variant="contained"
                  style={{ background: "white" }}
                  className="btnscontent"
                >
                  Student Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* content of page ends here */}
      </div>
      {/* main container ends here */}
    </>
  );
}
