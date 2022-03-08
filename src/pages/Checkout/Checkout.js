import React from "react";
import "./Checkout.css";
import Subtotal from "../../components/Subtotal/Subtotal";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import { useSelector } from "react-redux";

function Checkout() {
  // const [{ basket, user }, dispatch] = useStateValue();
  const { basket, user } = useSelector((state) => state.data);
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout-title">
            {basket.length === 0
              ? "Your Shopping basket is Empty"
              : "Your shopping Basket"}
          </h2>

          {basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
