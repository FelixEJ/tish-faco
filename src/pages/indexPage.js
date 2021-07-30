import React from "react";
import LogoHeader from "../components/header.js";
import NavBar from "../components/navBar";
import MenuCollapse from "../components/menuCollapse";
import Footer from "../components/footer";
import { snackData } from "../data/snacks.js";
import { tacoData } from "../data/tacosJune.js";
import "../App.css";

const IndexPage = () => {
  return (
    <div>
      <LogoHeader />
      <NavBar />
      <a class="btn btn-primary btn-lg btn-block" href="https://tish-faco.square.site/" role="button">Order Online Here</a>
      <div className="announcements">
        <h2>Happy Hour 3-5pm, Thurs-Mon</h2>
        <h2>Live Music Sundays 3-5pm</h2>
        <p>Specials menu updated regularly, come visit for the latest local treats!</p>
      </div>
      <MenuCollapse menu={tacoData} pageTitle="TACOS"></MenuCollapse>
      <MenuCollapse menu={snackData} pageTitle="SNACKS"></MenuCollapse>
      {/* <a class="btn btn-primary btn-lg btn-block" href="https://tish-faco.square.site/" role="button">Order Online Here</a> */}
      <Footer />
    </div>
  );
};

export default IndexPage;
