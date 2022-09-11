import React, { useContext } from "react";
import CantContext from "../../Context";
import "../canteen/Menu.css";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import SvgIcon from "@mui/material/SvgIcon";
import { Link } from "react-router-dom";
import { useState } from "react";

function BagIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
    </SvgIcon>
  );
}

export default function Menu() {
  const Rates = [100, 120, 80, 90, 90, 110];
  const Recipe = [
    "Consists of jalepeno, capsicum, onion , paneer , tomato and cheese.",
    "Consists of Chicken ,jalepeno, capsicum, onion , paneer , tomato and  cheese",
    "Consists of jalepeno, capsicum, onion and some more vegies.",
    "Consists of capsicum, onion , paneer and tomato.",
    "Consists of jalepeno, capsicum, onion and some more vegies with some pieces of chicken.",
    "Consists of capsicum, onion , paneer and tomato with some pieces of chicken.",
  ];
  const fooditem = [
    "Veg Pizza",
    "Non-Veg Pizza",
    "Chowmein",
    "Fried Rice",
    "Non-Veg Fried Rice",
    "Non-Veg Chowmein",
  ];
  const [item1, setitem1] = useState(0);

  const { setCheckout } = useContext(CantContext);

  const cardBackground1 = {
    backgroundColor: "#019138",
  };

  const cardBackground2 = {
    backgroundColor: "#d47706",
  };

  const isveg = true;
  return (
    <div className="container">
      <img
        src={require("./Canteen 1.jpg")}
        alt="CanteenPic"
        className="Menu-BgImg"
      />
      <div className="Menu-Navbar">
        <div className="Menu-logo">
          <Link to="/College" className="link">
            <img
              src={require("./BaskEat.png")}
              alt="baskEat"
              className="logo-pic"
            />
          </Link>
        </div>
        <div className="Menu-btns">
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
            <Link to="/Cantcart" className="link">
              <Button>
                <BagIcon
                  onClick={() => {
                    let temp = [];
                    if (item1 > 0) {
                      let item = {
                        name: fooditem[0],

                        price: Rates[0],
                        subtotal: Rates[0],
                      };
                      temp = [...temp, item];
                    }
                    if (item1 > 0) {
                      let item = {
                        name: fooditem[1],

                        price: Rates[1],
                        subtotal: Rates[1],
                      };
                      temp = [...temp, item];
                    }
                    if (item1 > 0) {
                      let item = {
                        name: fooditem[2],

                        price: Rates[2],
                        subtotal: Rates[2],
                      };
                      temp = [...temp, item];
                    }
                    if (item1 > 0) {
                      let item = {
                        name: fooditem[3],

                        price: Rates[3],
                        subtotal: Rates[3],
                      };
                      temp = [...temp, item];
                    }
                    if (item1 > 0) {
                      let item = {
                        name: fooditem[4],

                        price: Rates[5],
                        subtotal: Rates[5],
                      };
                      temp = [...temp, item];
                    }
                    if (item1 > 0) {
                      let item = {
                        name: fooditem[5],

                        price: Rates[4],
                        subtotal: Rates[4],
                      };
                      temp = [...temp, item];
                    }
                    setCheckout(temp);
                  }}
                  sx={{ fontSize: 30 }}
                />
              </Button>
            </Link>
          </li>
        </div>
      </div>
      <div className="Menu-body">
        <div className="Menu-welcm">
          <h1>CANTEEN </h1>
          <br />
          <h1>MENU</h1>
        </div>
        <div className="Menu-items">
          <div className="CantMenu-heading">
            <h1>MENU:-</h1>
          </div>
          <div className="Menu-cards">
            <div
              className="cards"
              style={isveg ? cardBackground1 : cardBackground2}
            >
              <div className="cards-front">
                <h1 className="item-heading">SANDWICH</h1>
                <img
                  src={require("../canteen/sandwich.png")}
                  alt="ItemPic"
                  className="Item-pic"
                />
                <h1 className="item-price">PRICE:-50/-</h1>
              </div>
              <div className="cards-back">
                <h1 className="item-heading">SANDWICH</h1>
                <div className="item-desc">
                  <p>
                    This is made of mayonnaise with some veggies like capsicum,
                    tomato and onion with sprinkle of oregano and pepper.
                  </p>
                </div>
                <div className="add-btn">
                  <Button>Add to Bag+</Button>
                </div>
              </div>
            </div>
            <div
              className="cards"
              style={isveg ? cardBackground2 : cardBackground1}
            >
              <div className="cards-front">
                <h1 className="item-heading">FRIED RICE</h1>
                <img
                  src={require("../canteen/fried-rice.png")}
                  alt="ItemPic"
                  className="Item-pic"
                />
                <h1 className="item-price">PRICE:-80/-</h1>
              </div>
              <div className="cards-back">
                <h1 className="item-heading">FRIED RICE</h1>
                <div className="item-desc">
                  <p>
                    This is made with some veggies like capsicum, tomato and
                    onion altogether with pieces of chicken along with some
                    sauces and spices.
                  </p>
                </div>
                <div className="add-btn">
                  <Button>Add to Bag+</Button>
                </div>
              </div>
            </div>
            <div
              className="cards"
              style={isveg ? cardBackground1 : cardBackground2}
            >
              <div className="cards-front">
                <h1 className="item-heading">CHOW MEIN</h1>
                <img
                  src={require("../canteen/chow-mein.png")}
                  alt="ItemPic"
                  className="Item-pic"
                />
                <h1 className="item-price">PRICE:-70/-</h1>
              </div>
              <div className="cards-back">
                <h1 className="item-heading">FRIED RICE</h1>
                <div className="item-desc">
                  <p>
                    This is made with some veggies like capsicum, tomato and
                    onion along with some sauces and spices.
                  </p>
                </div>
                <div className="add-btn">
                  <Button>Add to Bag+</Button>
                </div>
              </div>
            </div>
            <div
              className="cards"
              style={isveg ? cardBackground2 : cardBackground1}
            >
              <div className="cards-front">
                <h1 className="item-heading">CHOW MEIN</h1>
                <img
                  src={require("../canteen/chow-mein.png")}
                  alt="ItemPic"
                  className="Item-pic"
                />
                <h1 className="item-price">PRICE:-70/-</h1>
              </div>
              <div className="cards-back">
                <h1 className="item-heading">CHOW MEIN</h1>
                <div className="item-desc">
                  <p>
                    This is made with some veggies like capsicum, tomato and
                    onion altogether with pieces of chicken along with some
                    sauces and spices.
                  </p>
                </div>
                <div className="add-btn">
                  <Button>Add to Bag+</Button>
                </div>
              </div>
            </div>
            <div
              className="cards"
              style={isveg ? cardBackground1 : cardBackground2}
            >
              <div className="cards-front">
                <h1 className="item-heading">FRIED RICE</h1>
                <img
                  src={require("../canteen/fried-rice.png")}
                  alt="ItemPic"
                  className="Item-pic"
                />
                <h1 className="item-price">PRICE:-80/-</h1>
              </div>
              <div className="cards-back">
                <h1 className="item-heading">FRIED RICE</h1>
                <div className="item-desc">
                  <p>
                    This is made with some veggies like capsicum, tomato and
                    onion along with some sauces and spices.
                  </p>
                </div>
                <div className="add-btn">
                  <Button>Add to Bag+</Button>
                </div>
              </div>
            </div>
            <div
              className="cards"
              style={isveg ? cardBackground2 : cardBackground1}
            >
              <div className="cards-front">
                <h1 className="item-heading">SANDWICH</h1>
                <img
                  src={require("../canteen/sandwich.png")}
                  alt="ItemPic"
                  className="Item-pic"
                />
                <h1 className="item-price">PRICE:-50/-</h1>
              </div>
              <div className="cards-back">
                <h1 className="item-heading">SANDWICH</h1>
                <div className="item-desc">
                  <p>
                    This is made of mayonnaise with some veggies like capsicum,
                    tomato and onion along with some slices of chicken and with
                    sprinkle of oregano and pepper.
                  </p>
                </div>
                <div className="add-btn">
                  <Button>Add to Bag+</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="Menu-Backbtn">
            <Link to="/Cant">
              <Button>Back</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
