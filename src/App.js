import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
// import Checkout from "./pages/Checkout/Checkout"
import { auth } from "./utils/firebase";
import Header from "./components/Header/Header";
// import Home from "./pages/Home/Home";
// import Login from "./pages/Login/Login";
// import Payment from "./pages/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// import Orders from "./pages/Orders/Orders"
// import Register from "./pages/Register/Register";

import { useDispatch } from "react-redux";
import { setUser } from "./redux/actions";
import Loading from "./components/Loading/Loading";
// import SingleProduct from "./pages/SingleProduct/SingleProduct";
const Payment = lazy(() => import("./pages/Payment/Payment"));
const Login = lazy(() => import("./pages/Login/Login"));
const Orders = lazy(() => import("./pages/Orders/Orders"));
const Register = lazy(() => import("./pages/Register/Register"));
const Checkout = lazy(() => import("./pages/Checkout/Checkout"));
const SingleProduct = lazy(() => import("./pages/SingleProduct/SingleProduct"));
const Home = lazy(() => import("./pages/Home/Home"));

const promise = loadStripe(
  "pk_test_51CyGOzC6kPsGZtvq0dYtguuZxPIn7mYzoRCDgZtNnNST9ZuN9ThkejipXGrOnm0xHjk7bp6ba1NRm6aFGCTwTrWL005dtWi3cX"
);

function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setTimeout(() => {
          dispatch(setUser(authUser));
        }, 1000);
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Suspense fallback={<Loading />}>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/orders">
              <Header />
              <Orders />
            </Route>
            <Route path="/payment">
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Route>
            <Route path="/product/:id">
              <Header />
              <SingleProduct />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="/">
              <Header />
              <Home />
            </Route>
          </Suspense>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
