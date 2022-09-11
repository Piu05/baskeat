import React, { useContext, useEffect } from "react";
import "./Cart.css";
import Avatar from "@mui/material/Avatar";
import SvgIcon from "@mui/material/SvgIcon";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { fooditem, foodPics } from "./Home.js";
import Context from "../../Context";

function BagIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
    </SvgIcon>
  );
}
function ArrowIcon(props) {
  return (
    <SvgIcon {...props}>
      <path
        // fill-rule="evenodd"
        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
      />
    </SvgIcon>
  );
}

function createData(Products, Price, Subtotal) {
  return { Products, Price, Subtotal };
}

export default function Cart() {
  // const items = ["Item1", "Item2", "Item3", "Item4"];
  const pics = [
    <img
      src={require("../canteen/chow-mein.png")}
      alt="itemPic"
      className="item-pic"
    />,
    <img
      src={require("../canteen/fried-rice.png")}
      alt="itemPic"
      className="item-pic"
    />,
    <img
      src={require("../canteen/pizza.png")}
      alt="itemPic"
      className="item-pic"
    />,
    <img
      src={require("../canteen/sandwich.png")}
      alt="itemPic"
      className="item-pic"
    />,
  ];
  // const items = fooditem;
  // const value = 0;

  return (
    <div className="Cart-Container">
      <div className="Cart-body">
        <div className="Cart-Navbar">
          <div className="Cart-logo">
            <Link to="/College" className="link">
              <img
                src={require("./BaskEat.png")}
                alt="baskEat"
                className="logo-pic"
              />
            </Link>
          </div>
          <div className="Cart-btns">
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
              <Button>
                <BagIcon sx={{ fontSize: 30 }} />
              </Button>
            </li>
          </div>
        </div>
        <div className="Cart-mainBody">
          <img
            src={require("../canteen/Bag.jpg")}
            alt="BagPic"
            className="Bag-pic"
          />
          <h1 className="Bag-heading">Bag</h1>
          <div className="Cart-bag"></div>
          <div className="Cart-payment">
            <div className="Cart-total">
              <h1 className="totalHeading">TOTAL:</h1>
              <div className="amount-card">
                <h1 className="amountHeading">1000</h1>
              </div>
            </div>
            <div className="Cart-cardInfo">
              <div className="Card-body">
                <div className="Card-opt">
                  <div className="visa-card">
                    <Button>
                      <img
                        src={require("../canteen/visa.png")}
                        alt="payPic"
                        className="Pay-pic"
                      />
                    </Button>
                  </div>
                  <div className="gpay-card">
                    <Button>
                      <img
                        src={require("../canteen/gpay.png")}
                        alt="payPic"
                        className="Pay-pic"
                      />
                    </Button>
                  </div>
                  <div className="paytm-card">
                    <Button>
                      <img
                        src={require("../canteen/paytm.png")}
                        alt="payPic"
                        className="Pay-pic"
                      />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="Card-info">
                <div className="Card-no">
                  <TextField
                    fullWidth
                    id="Card-no"
                    label="Card no."
                    variant="outlined"
                    margin="normal"
                    size="small"
                  />
                </div>
                <div className="Card-name">
                  <TextField
                    fullWidth
                    id="Card-no"
                    label="Name On Card"
                    variant="outlined"
                    margin="normal"
                    size="small"
                  />
                </div>
                <div className="Card-date">
                  <TextField
                    fullWidth
                    id="Card-no"
                    label=""
                    variant="outlined"
                    type={"date"}
                    margin="normal"
                    size="small"
                    helperText="Expy. Date"
                  />
                </div>
                <div className="CVV">
                  <TextField
                    fullWidth
                    //   id="Card-no"
                    label="CVV"
                    variant="outlined"
                    margin="normal"
                    size="small"
                  />
                </div>
              </div>
              <div className="Card-pay">
                <Button
                  className="PayBtn"
                  style={{
                    borderRadius: 35,
                    backgroundColor: "#34A853",
                    padding: "2px 36px",
                  }}
                >
                  <h1>Pay</h1>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
