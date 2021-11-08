import React from "react";
import LogoHeader from "../components/header.js";
import NavBar from "../components/navBar";
import MenuCollapse from "../components/menuCollapse";
import Footer from "../components/footer";
import ScrollTopButton from "../components/scrollTopButton.js";
import { cocktailsData } from "../data/cocktails.js";
import { dessertData } from "../data/dessert.js";
import { drinksData } from "../data/drinks.js";
import { enchiladasData } from "../data/enchiladas.js";
import { mainsData } from "../data/mains.js";
import { snackData } from "../data/snacks.js";
import { spiritsData } from "../data/spirits.js";
import { tacoData } from "../data/tacos.js";
import { tostadasData } from "../data/tostadas.js";

import "../App.css";

const IndexPage = () => {
  return (
    <div>
      <LogoHeader />
      <NavBar />
      <MenuCollapse menu={tacoData} pageTitle="TACOS $7"></MenuCollapse>      
      <MenuCollapse menu={tostadasData} pageTitle="TOSTADAS $10"></MenuCollapse>
      <MenuCollapse menu={enchiladasData} pageTitle="ENCHILADAS $20"></MenuCollapse>
      <MenuCollapse menu={snackData} pageTitle="SNACKS"></MenuCollapse>
      <MenuCollapse menu={mainsData} pageTitle="MORE"></MenuCollapse>
      <MenuCollapse menu={dessertData} pageTitle="DESSERT"></MenuCollapse>
      <MenuCollapse menu={cocktailsData} pageTitle="COCKTAILS"></MenuCollapse>
      <MenuCollapse menu={drinksData} pageTitle="DRINKS"></MenuCollapse>
      <MenuCollapse menu={spiritsData} pageTitle="SPIRITS"></MenuCollapse>
      <a id="order"
        class="btn btn-primary btn-lg btn-block"
        href="https://tish-faco.square.site/"
        role="button"
      >
        ORDER ONLINE HERE
      </a>
      <p>
          Specials menu updated regularly, come visit for the latest local
          treats!
        </p>
      <ScrollTopButton />
      <Footer />
      <p id="address"><a href="https://goo.gl/maps/xwLV4mbH2pAE21c9A">111 HYDE ST, BELLINGEN NSW 2454</a></p>
      <a id="phone" href="tel:+61256168426">(02) 56168426</a>
    </div>
  );
};

export default IndexPage;
