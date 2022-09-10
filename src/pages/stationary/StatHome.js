import React, { useContext } from "react";
import "./StatHome.css";
import { useState } from "react";
import { Button } from "@mui/material";
import { MdShoppingCart } from "react-icons/md";
import { Link, useHistory } from "react-router-dom";
import StatCart from "./StatCart";
import Context from "../../Context";

function StatHome() {
  const { setCheckoutList } = useContext(Context);
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [value5, setValue5] = useState(0);
  const history = useHistory();

  function onIncrementNotebook() {
    setValue(value + 1);
  }
  function onIncrementcryons() {
    setValue1(value1 + 1);
  }
  function onIncrementerasers() {
    setValue2(value2 + 1);
  }
  function onIncrementpencil() {
    setValue3(value3 + 1);
  }
  function onIncrementa4sheet() {
    setValue4(value4 + 1);
  }
  function onIncrementpen() {
    setValue5(value5 + 1);
  }
  function onDecrementNotebook() {
    setValue(value - 1);
  }
  function onDecrementcryons() {
    setValue1(value1 - 1);
  }
  function onDecrementerasers() {
    setValue2(value2 - 1);
  }
  function onDecrementpencil() {
    setValue3(value3 - 1);
  }
  function onDecrementa4sheet() {
    setValue4(value4 - 1);
  }
  function onDecrementpen() {
    setValue5(value5 - 1);
  }

  return (
    <div className="Container">
      <div className="stathome__navbar text-center">
        <div className="stathome__navLogo">
          <Link to="/College" className="link">
            <img
              src={require("./BaskEat.png")}
              alt="baskEat"
              className="Logo"
            />
          </Link>
        </div>
        <div className="stathome__navbtns">
          <li>
            <Link to="/College" className="link">
              <Button>Home</Button>
            </Link>
            {/* <Link to="/College" className="link">
              <Button>College</Button>
            </Link> */}
            <Link to="/Cant" className="link">
              <Button>Canteen</Button>
            </Link>
            <Link to="/StatHome" className="link">
              <Button>Stationary</Button>
            </Link>
            <Link to="/statcart">
              <div className="stathome_cartcontainer">
                <MdShoppingCart
                  onClick={() => {
                    let temp = [];
                    if (value > 0) {
                      let item = {
                        name: "Notebook",
                        qty: value,
                        price: 30,
                        subtotal: 30 * value,
                      };
                      temp = [...temp, item];
                    }
                    if (value1 > 0) {
                      let item = {
                        name: "Cryons",
                        qty: value1,
                        price: 40,
                        subtotal: 40 * value1,
                      };
                      temp = [...temp, item];
                    }
                    if (value2 > 0) {
                      let item = {
                        name: "Erasers",
                        qty: value2,
                        price: 5,
                        subtotal: 5 * value2,
                      };
                      temp = [...temp, item];
                    }
                    if (value3 > 0) {
                      let item = {
                        name: "Pencil",
                        qty: value3,
                        price: 30,
                        subtotal: 30 * value3,
                      };
                      temp = [...temp, item];
                    }
                    if (value4 > 0) {
                      let item = {
                        name: "A4 sheet",
                        qty: value4,
                        price: 40,
                        subtotal: 40 * value4,
                      };
                      temp = [...temp, item];
                    }
                    if (value5 > 0) {
                      let item = {
                        name: "Pen",
                        qty: value5,
                        price: 10,
                        subtotal: 10 * value5,
                      };
                      temp = [...temp, item];
                    }
                    setCheckoutList(temp);
                    history.push("/checkout");
                  }}
                  className="stathome_carticon"
                />
              </div>
            </Link>
            <span className=" header__basketCount"></span>
          </li>
        </div>
      </div>

      <div className="stathome__container">
        <div className="stathome__headingcontainer">
          <h1 className="stathome__heading">STATIONARY</h1>
        </div>
        <div className="stathome__cards">
          <article className="stathome__card">
            <div className="stathome__div">
              <img
                className="stathome__img"
                src="https://www.solo.in/image/cache/Web%20upload%201500px%20Courier/NA553/MIX/1-1000x1000.jpg"
                alt=""
              ></img>
              <div className="stathome__infocontainer">
                <h5 className="stathome__info">Notebooks</h5>
                <h5 className="stathome__info">Price: 30 </h5>
              </div>
            </div>
            <div className="stathome__boxcontainer">
              <div className="stathome__quantity">
                <h3>
                  Qty: <div className="stathome__value">{value}</div>
                </h3>
              </div>
              <div className="stathome__btncontainer">
                <div className="stathome__buttoncontainer">
                  <button
                    onClick={onIncrementNotebook}
                    className="stathome__button"
                  >
                    +
                  </button>
                </div>
                <div className="stathome__buttoncontainer1">
                  <button
                    onClick={onDecrementNotebook}
                    className="stathome__button"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </article>

          <article className="stathome__card">
            <div className="stathome__div">
              <img
                className="stathome__img"
                src="https://m.media-amazon.com/images/I/91vcm2ykc+L._SL1500_.jpg"
                alt=""
              ></img>
              <div className="stathome__infocontainer">
                <h5 className="stathome__info">Cryons</h5>
                <h5 className="stathome__info">Price: 40 </h5>
              </div>
            </div>
            <div className="stathome__boxcontainer">
              <div className="stathome__quantity">
                <h3>
                  Qty: <div className="stathome__value">{value1}</div>
                </h3>
              </div>
              <div className="stathome__btncontainer">
                <div className="stathome__buttoncontainer">
                  <button
                    onClick={onIncrementcryons}
                    className="stathome__button"
                  >
                    +
                  </button>
                </div>
                <div className="stathome__buttoncontainer1">
                  <button
                    onClick={onDecrementcryons}
                    className="stathome__button"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </article>

          <article className="stathome__card">
            <div className="stathome__div">
              <img
                className="stathome__img"
                src="https://offimart.com/1205-large_default/apsara-rub-a-long-erasers-pack-of-20.jpg"
                alt=""
              ></img>
              <div className="stathome__infocontainer">
                <h5 className="stathome__info">Erasers</h5>
                <h5 className="stathome__info">Price: 10 </h5>
              </div>
            </div>
            <div className="stathome__boxcontainer">
              <div className="stathome__quantity">
                <h3>
                  Qty: <div className="stathome__value">{value2}</div>
                </h3>
              </div>
              <div className="stathome__btncontainer">
                <div className="stathome__buttoncontainer">
                  <button
                    onClick={onIncrementerasers}
                    className="stathome__button"
                  >
                    +
                  </button>
                </div>
                <div className="stathome__buttoncontainer1">
                  <button
                    onClick={onDecrementerasers}
                    className="stathome__button"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </article>

          <article className="stathome__card">
            <div className="stathome__div">
              <img
                className="stathome__img"
                src="https://rukminim1.flixcart.com/image/416/416/j5fmqa80/pencil/f/d/b/neon-doms-original-imaew4ggajytyxng.jpeg?q=70"
                alt=""
              ></img>
              <div className="stathome__infocontainer">
                <h5 className="stathome__info">Pencil</h5>
                <h5 className="stathome__info">Price: 5 </h5>
              </div>
            </div>
            <div className="stathome__boxcontainer">
              <div className="stathome__quantity">
                <h3>
                  Qty: <div className="stathome__value">{value3}</div>
                </h3>
              </div>
              <div className="stathome__btncontainer">
                <div className="stathome__buttoncontainer">
                  <button
                    onClick={onIncrementpencil}
                    className="stathome__button"
                  >
                    +
                  </button>
                </div>
                <div className="stathome__buttoncontainer1">
                  <button
                    onClick={onDecrementpencil}
                    className="stathome__button"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </article>

          <article className="stathome__card">
            <div className="stathome__div">
              <img
                className="stathome__img"
                src="https://m.media-amazon.com/images/I/4152MnLQ5eL._AC_SS450_.jpg"
                alt=""
              ></img>
              <div className="stathome__infocontainer">
                <h5 className="stathome__info">A4 sheet</h5>
                <h5 className="stathome__info">Price: 40</h5>
              </div>
            </div>
            <div className="stathome__boxcontainer">
              <div className="stathome__quantity">
                <h3>
                  Qty: <div className="stathome__value">{value4}</div>
                </h3>
              </div>
              <div className="stathome__btncontainer">
                <div className="stathome__buttoncontainer">
                  <button
                    onClick={onIncrementa4sheet}
                    className="stathome__button"
                  >
                    +
                  </button>
                </div>
                <div className="stathome__buttoncontainer1">
                  <button
                    onClick={onDecrementa4sheet}
                    className="stathome__button"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </article>

          <article className="stathome__card">
            <div className="stathome__div">
              <img
                className="stathome__img"
                src="https://m.media-amazon.com/images/I/51vOMolqGsL._SL1050_.jpg"
                alt=""
              ></img>
              <div className="stathome__infocontainer">
                <h5 className="stathome__info">Pen</h5>
                <h5 className="stathome__info">Price: 10 </h5>
              </div>
            </div>
            <div className="stathome__boxcontainer">
              <div className="stathome__quantity">
                <h3>
                  Qty: <div className="stathome__value">{value5}</div>
                </h3>
              </div>
              <div className="stathome__btncontainer">
                <div className="stathome__buttoncontainer">
                  <button onClick={onIncrementpen} className="stathome__button">
                    +
                  </button>
                </div>
                <div className="stathome__buttoncontainer1">
                  <button onClick={onDecrementpen} className="stathome__button">
                    -
                  </button>
                </div>
              </div>
            </div>
          </article>
         </div>
      </div>
    </div>
  );
}

export default StatHome;
