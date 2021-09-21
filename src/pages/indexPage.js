import React from "react";
import LogoHeader from "../components/header.js";
import NavBar from "../components/navBar";
import MenuCollapse from "../components/menuCollapse";
import Footer from "../components/footer";
import ScrollTopButton from "../components/scrollTopButton.js";
import { snackData } from "../data/snacks-temp.js";
import { tacoData } from "../data/tacos.js";
// import { mainsData} from "../data/mains.js";
import { cocktailsData } from "../data/cocktails.js";
import { drinksData } from "../data/drinks.js";
// import { spiritsData } from "../data/spirits.js";
// import { mealPacksData } from "../data/mealPacks.js";
// import { mealsData } from "../data/meals.js";
import "../App.css";

const IndexPage = () => {
  return (
    <div>
      <LogoHeader />
      <NavBar />
      <a
        class="btn btn-primary btn-lg btn-block"
        href="https://tish-faco.square.site/"
        role="button"
      >
        Order Online Here
      </a>
      <div className="announcements">
        {/* <h2>Happy Hour 3-5pm, Thurs-Mon</h2> */}
        {/* <h2>Live Music Sundays 3-5pm</h2> */}
        <p>
          Specials menu updated regularly, come visit for the latest local
          treats!
        </p>
      </div>      
      <MenuCollapse menu={tacoData} pageTitle="TACOS"></MenuCollapse>
      {/* <MenuCollapse menu={mealPacksData} pageTitle="MEAL PACKS"></MenuCollapse> */}
      <MenuCollapse menu={snackData} pageTitle="NOT TACOS"></MenuCollapse>
      {/* <MenuCollapse menu={mainsData} pageTitle="MAINS"></MenuCollapse> */}
      {/* <MenuCollapse menu={mealsData} pageTitle="MEALS"></MenuCollapse> */}
      <MenuCollapse menu={cocktailsData} pageTitle="COCKTAILS"></MenuCollapse>
      <MenuCollapse menu={drinksData} pageTitle="DRINKS"></MenuCollapse>
      {/* <MenuCollapse menu={spiritsData} pageTitle="SPIRITS"></MenuCollapse> */}
      <ScrollTopButton />
      <Footer />
    </div>
  );
};

export default IndexPage;
