import "./App.css";
import HeroPage from "./pages/login-pages/Heropage";
import AdminLogin from "./pages/login-pages/AdminLogin";
import StudentLogin from "./pages/login-pages/StudentLogin";
import SignUp from "./pages/login-pages/SignUP";
import StatHome from "./pages/stationary/StatHome";
<<<<<<< HEAD
// import HeroPage from "./pages/login-pages/heroPage";
// import CantHome from "./pages/canteen/Home";
// import CantMenu from "./pages/canteen/Menu";
// import CantCart from "./pages/canteen/Cart";
import StatCart from "./pages/stationary/StatCart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import AdminLogin from "./pages/login-pages/AdminLogin";
// import StudentLogin from "./pages/login-pages/StudentLogin";
// import Clgsearch from "./pages/college/Clgsearch";
// import Addcollege from "./pages/college/Addcollege";
// import SignUp from "./pages/login-pages/signUp";
// import Home from "./pages/canteen/Home.js";
=======
import CantHome from "./pages/canteen/Home";
import CantMenu from "./pages/canteen/Menu";
import CantCart from "./pages/canteen/Cart";
import StatCart from "./pages/stationary/StatCart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Clgsearch from "./pages/college/Clgsearch";
import Addcollege from "./pages/college/Addcollege";
>>>>>>> 07bf90353b5d2c1b4539bf1d97619552dd1475d3
import Context from "./Context";
import { useState } from "react";

function App() {
  const [checkoutList, setCheckoutList] = useState([]);
  return (
    <Context.Provider value={{ checkoutList, setCheckoutList }}>
      <Router>
        <div className="App">
          <Switch>
            {/* <Route exact path="/">
              <HeroPage />
            </Route>
            <Route exact path="/adminlogin">
              <AdminLogin />
            </Route>
            <Route exact path="/studentlogin">
              <StudentLogin />
            </Route>
            <Route exact path="/signUp">
              <SignUp />
            </Route> */}
            <Route exact path="/stathome">
              <StatHome />
            </Route>
            <Route exact path="/statcart">
              <StatCart />
            </Route>
<<<<<<< HEAD

            {/* <Route exact path="/Cant">
              <CantHome />
            </Route>
=======
>>>>>>> 07bf90353b5d2c1b4539bf1d97619552dd1475d3
            <Route exact path="/CantMenu">
              <CantMenu />
            </Route>
            <Route exact path="/Cantcart">
              <CantCart />
            </Route>
            <Route exact path="/College">
              <Clgsearch />
            </Route>
            <Route exact path="/Addcollege">
              <Addcollege />
            </Route>
            <Route exact path="/Cant">
              <CantHome />
            </Route> */}
          </Switch>
        </div>
      </Router>
<<<<<<< HEAD
      
=======
>>>>>>> 07bf90353b5d2c1b4539bf1d97619552dd1475d3
    </Context.Provider>
  );
}

export default App;
