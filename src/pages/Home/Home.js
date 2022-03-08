import React from "react";
import "./Home.css";
import Product from "../../components/Product/Product";
import Banner1 from "../../BannerImages/Banner1.jpg";
import Banner2 from "../../BannerImages/Banner2.jpg";
import Banner3 from "../../BannerImages/Banner3.jpg";
import Banner4 from "../../BannerImages/Banner4.jpg";
import Banner5 from "../../BannerImages/Banner5.jpg";
import Banner6 from "../../BannerImages/Banner6.jpg";
import Slider from "../../components/Slider/Slider";
import { products, headerItems } from "../../utils/ProductsData";
import Loading from "../../components/Loading/Loading";
import { useSelector } from "react-redux";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

function Home() {
  const bannerImages = [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6];

  const { loading } = useSelector((state) => state.data);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="item-container">
        {headerItems && headerItems.map((item) => <p>{item}</p>)}
      </div>

      <div className="home">
        <div className="home-container">
          <Slider images={bannerImages} />
          <div className="home-row">
            {products.slice(0, 2).map((item) => (
              <Product
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
          <div className="home-row">
            {products.slice(2, 5).map((item) => (
              <Product
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
          <div className="home-row">
            {products.slice(5, 6).map((item) => (
              <Product
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
          <div style={{ marginTop: "40px" }}>
            <ScrollToTop />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
