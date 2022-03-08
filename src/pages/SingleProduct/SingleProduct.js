import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SingleProduct.css";
import { products } from "../../utils/ProductsData";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/actions";

const SingleProduct = () => {
  let { id } = useParams();
  const singleProduct = products.find((item) => item.id === id);
  let dispatch = useDispatch();

  useEffect(() => {
    document.title = `${singleProduct.title}`;
  }, [singleProduct]);

  const addItemToBasket = () => {
    const item = {
      id: singleProduct.id,
      price: singleProduct.price,
      rating: singleProduct.rating,
      image: singleProduct.image,
      title: singleProduct.title,
      detail: singleProduct.detail,
      specification: singleProduct.specification,
    };
    dispatch(addToBasket(item));
  };

  return (
    <>
      <div className="single-product-container">
        <img
          className="single-product-ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <div className="single-product">
            <img
              src={singleProduct.image}
              alt=""
              className="single-product-image"
            />
            <div className="single-product-info">
              <p className="single-product-title">{singleProduct.title}</p>
              <div className="single-product-rating">
                {Array(singleProduct.rating)
                  .fill()
                  .map((_, index) => (
                    <p key={index}>⭐</p>
                  ))}
              </div>
              <p className="single-product-price">
                Price: <strong>$</strong>
                <strong>{singleProduct.price}</strong>
              </p>
              <div className="single-product-specification">
                <h4>Specification</h4>
                {singleProduct.specification &&
                  singleProduct.specification.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
              </div>
              <div className="single-product-description">
                <h4>Product Description</h4>
                <p>{singleProduct.detail}</p>
              </div>
              <button onClick={addItemToBasket}>
                <i>
                  <ShoppingCartOutlinedIcon />
                </i>
                Add to Basket
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
