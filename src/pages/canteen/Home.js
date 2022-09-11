import { Button } from "@mui/material";
import React, { useContext } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
// import Avatar from "@mui/material/Avatar";
// import { deepPurple } from "@mui/material/colors";

import SvgIcon from "@mui/material/SvgIcon";
import CantContext from "../../Context";
import { useState } from "react";

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
export const fooditem = [
  "Veg Pizza",
  "Non-Veg Pizza",
  "Chowmein",
  "Fried Rice",
  "Non-Veg Fried Rice",
  "Non-Veg Chowmein",
];
export const foodPics = [
  <img src={require("./pizza.png")} alt="ItemPic" className="Item-pic" />,
  <img src={require("./chow-mein.png")} alt="ItemPic" className="Item-pic" />,
  <img src={require("./fried-rice.png")} alt="ItemPic" className="Item-pic" />,
];

export default function CantHome() {
  // export const fooditem = [
  //   "Veg Pizza",
  //   "Non-Veg Pizza",
  //   "Chowmein",
  //   "Fried Rice",
  //   "Non-Veg Fried Rice",
  //   "Non-Veg Chowmein",
  // ];
  // const foodPics = [
  //   <img src={require("./pizza.png")} alt="ItemPic" className="Item-pic" />,
  //   <img src={require("./chow-mein.png")} alt="ItemPic" className="Item-pic" />,
  //   <img
  //     src={require("./fried-rice.png")}
  //     alt="ItemPic"
  //     className="Item-pic"
  //   />,
  // ];
  const Rates = [100, 120, 80, 90, 90, 110];
  const Recipe = [
    "Consists of jalepeno, capsicum, onion , paneer , tomato and cheese.",
    "Consists of Chicken ,jalepeno, capsicum, onion , paneer , tomato and  cheese",
    "Consists of jalepeno, capsicum, onion and some more vegies.",
    "Consists of capsicum, onion , paneer and tomato.",
    "Consists of jalepeno, capsicum, onion and some more vegies with some pieces of chicken.",
    "Consists of capsicum, onion , paneer and tomato with some pieces of chicken.",
  ];

  // function handleClicks(event) {
  //   event.preventDefault();
  //   setSelected(event);
  // }

  // const [selected, setSelected] = React.useState("Cart");

  const [rate, SetRate] = useState(Rates[0]);

  const [Image, SetImage] = useState(foodPics[0]);

  const [itemHeading, SetHeading] = useState(fooditem[0]);

  const [recipe, SetRecipe] = useState(Recipe[0]);

  const [item1, setitem1] = useState(0);

  const { setCheckout } = useContext(CantContext);
  //   const history = useHistory();
  var itemValue = 0;

  return (
    <>
      <div className="Container">
        <img
          src={require("./Canteen 1.jpg")}
          alt="CanteenPic"
          className="Cant-BgImg"
        />
        <div className="Canteen-Navbar">
          <div className="Canteen-logo">
            <Link to="/College" className="link">
              <img
                src={require("./BaskEat.png")}
                alt="baskEat"
                className="logo-pic"
              />
            </Link>
          </div>
          <div className="Canteen-btns">
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
                          name: "Veg Pizza",

                          price: 100,
                          subtotal: 100,
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
        <div className="Canteen-body">
          <div className="Cant-welcm">
            <h1>WELCOME </h1>
            <h1> TO </h1>
            <h1>CANTEEN</h1>
          </div>
          <div className="Cant-Menu">
            <div className="Menu-heading">
              <h1>Menu:-</h1>
              <h2>Today's Special</h2>
              <div className="Menu-itemss">
                <div className="veg">Veg</div>
                <div className="Nonveg">Non veg</div>
                <div className="Menu-item">
                  <Button
                    onClick={() => {
                      SetImage(foodPics[0]);
                      SetRate(Rates[0]);
                      SetHeading(fooditem[0]);
                      SetRecipe(Recipe[0]);
                      itemValue = 0;
                    }}
                  >
                    {fooditem[0]}
                  </Button>
                </div>
                <div className="Menu-item">
                  <Button
                    onClick={() => {
                      SetImage(foodPics[0]);
                      SetRate(Rates[1]);
                      SetHeading(fooditem[1]);
                      SetRecipe(Recipe[1]);
                      itemValue = 1;
                    }}
                  >
                    {fooditem[1]}
                  </Button>
                </div>
                <div className="Menu-item">
                  <Button
                    onClick={() => {
                      SetImage(foodPics[1]);
                      SetRate(Rates[2]);
                      SetHeading(fooditem[2]);
                      SetRecipe(Recipe[2]);
                      itemValue = 2;
                    }}
                  >
                    {fooditem[2]}
                  </Button>
                </div>
                <div className="Menu-item">
                  <Button
                    onClick={() => {
                      SetImage(foodPics[2]);
                      SetRate(Rates[5]);
                      SetHeading(fooditem[4]);
                      SetRecipe(Recipe[4]);
                      itemValue = 4;
                    }}
                  >
                    {fooditem[4]}
                  </Button>
                </div>
                <div className="Menu-item">
                  <Button
                    onClick={() => {
                      SetImage(foodPics[2]);
                      SetRate(Rates[3]);
                      SetHeading(fooditem[3]);
                      SetRecipe(Recipe[3]);
                      itemValue = 3;
                    }}
                  >
                    {fooditem[3]}
                  </Button>
                </div>
                <div className="Menu-item">
                  <Button
                    onClick={() => {
                      SetImage(foodPics[1]);
                      SetRate(Rates[4]);
                      SetHeading(fooditem[5]);
                      SetRecipe(Recipe[5]);
                      itemValue = 5;
                    }}
                  >
                    {fooditem[5]}
                  </Button>
                </div>
              </div>
            </div>
            <div className="Menu-arrow">
              <h1>
                <ArrowIcon sx={{ fontSize: 60 }} />
              </h1>
            </div>
            <div className="Menu-card">
              <div className="Menu-pic">
                <div className="Menu-pic-front">
                  <div className="Pic-heading">
                    <h1>{itemHeading}</h1>
                  </div>
                  <div className="Pic-img">{Image}</div>
                  <div className="Pic-price">
                    <h1>Price:-{rate}/-</h1>
                  </div>
                </div>
                <div className="Menu-pic-back">
                  <h1>{itemHeading}</h1>
                  <p>{recipe}</p>
                  <Button
                    onClick={() => {
                      setitem1((item1 = itemValue));
                    }}
                  >
                    Add to Bag+
                  </Button>
                </div>
              </div>
            </div>
            <div className="Nextbtn">
              <Link to="/CantMenu">
                <Button>NEXT</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
