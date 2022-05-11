import React from "react";
import "../component-styles/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Banner"
        />

        <div className="home_row">
          <Product
            id={1}
            title="The Alignment Problem"
            price={29.99}
            image="https://brianchristian.org/images/The-Alignment-Problem-Front-Cover.jpg"
            rating={5}
          />
          <Product
            id={2}
            title="The Alignment Problem"
            price={29.99}
            image="https://brianchristian.org/images/The-Alignment-Problem-Front-Cover.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id={3}
            title="The Alignment Problem"
            price={29.99}
            image="https://brianchristian.org/images/The-Alignment-Problem-Front-Cover.jpg"
            rating={5}
          />
          <Product
            id={4}
            title="The Alignment Problem"
            price={29.99}
            image="https://brianchristian.org/images/The-Alignment-Problem-Front-Cover.jpg"
            rating={5}
          />
          <Product
            id={5}
            title="The Alignment Problem"
            price={29.99}
            image="https://brianchristian.org/images/The-Alignment-Problem-Front-Cover.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id={6}
            title="The Alignment Problem"
            price={29.99}
            image="https://brianchristian.org/images/The-Alignment-Problem-Front-Cover.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
