import "./App.css";
import HeroPage from "./pages/login-pages/Heropage";
import AdminLogin from "./pages/login-pages/AdminLogin";
import StudentLogin from "./pages/login-pages/StudentLogin";
import SignUp from "./pages/login-pages/SignUP";
import StatHome from "./pages/stationary/StatHome";
import CantHome from "./pages/canteen/Home";
import CantMenu from "./pages/canteen/Menu";
import CantCart from "./pages/canteen/Cart";
import StatCart from "./pages/stationary/StatCart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Clgsearch from "./pages/college/Clgsearch";
import Addcollege from "./pages/college/Addcollege";
import Context from "./Context";
import CantContext from "./CantContext";
import { useState } from "react";

function App() {
  const [checkoutList, setCheckoutList] = useState([]);
  const [checkout, setCheckout] = useState([]);
  return (
    <Context.Provider value={{ checkoutList, setCheckoutList }}>
      <CantContext.Provider value={{ checkout, setCheckout }}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/">
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
              </Route>
              <Route exact path="/stathome">
                <StatHome />
              </Route>
              <Route exact path="/statcart">
                <StatCart />
              </Route>

              <Route exact path="/Cant">
                <CantHome />
              </Route>
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
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/Cant">
                <CantHome />
              </Route>
            </Switch>
          </div>
        </Router>
      </CantContext.Provider>
    </Context.Provider>
  );
}

export default App;
