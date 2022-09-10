import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Link as MaterialLink } from "@mui/material";

import "./SignUP.css";
import { Box } from "@mui/system";

// import Grid from "@mui/material/Grid";
// import TextField from "@mui/material/TextField";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase";
import { useState } from "react";

export default function SignUP() {
  const auth = getAuth(auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert("successfully created the account");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        alert(errorCode);
        // ..
      });
  };

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
          <div className="logoName"></div>
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
        <div className="mainBody">
          <Box className="mainBox">
            <img src={require("./pics/user.png")} alt="User" className="user" />
            <div className="signUpText">Sign Up</div>
            <Box sx={{ width: "100%" }} className="innerText">
              <div class="inputContainer">
                <input type="text" className="input" placeholder="Full Name" />
                {/* <label for="" className="label">
                  Full Name
                </label> */}
              </div>

              <div class="inputContainer">
                <input
                  type="tel"
                  class="input"
                  placeholder="Phone Number"
                  minLength="10"
                  maxLength="10"
                />
              </div>

              <div class="inputContainer">
                <input type="text" class="input" placeholder="Username" />
              </div>

              <div class="inputContainer">
                <input
                  type={"password"}
                  class="input"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div class="inputContainer">
                <input type="text" class="input" placeholder="College name" />
              </div>

              <div class="inputContainer">
                <input
                  type={"email"}
                  class="input"
                  placeholder="Email ID"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div class="inputContainer">
                <input
                  type="dropdown"
                  class="input"
                  placeholder="Sign Up as..."
                />
              </div>

              <div class="inputContainer">
                <input
                  type="text"
                  class="input"
                  placeholder="Student Roll No./Employ ID"
                />
              </div>
            </Box>
            <div className="signButton">
              <Button variant="contained" className="signButn" onClick={signUp}>
                SignUp Now
              </Button>
              <div className="acclog">
                Already have an account&nbsp;
                <MaterialLink underline="hover">
                  <Link to="/" className="link logbtn">
                    Login
                  </Link>
                </MaterialLink>
                &nbsp;here
              </div>
            </div>
          </Box>
        </div>
        {/* content of page ends here */}
      </div>
      {/* main container ends here */}
    </>
  );
}
