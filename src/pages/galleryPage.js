import * as React from "react";
import NavBar from "../components/navBar";
import LogoHeader from "../components/header";
import Footer from "../components/footer";
import Gallery from "../components/gallery";
import ScrollTopButton from "../components/scrollTopButton.js";

const GalleryPage = () => {
  return (
    <div>
      <LogoHeader />
      <NavBar />
      <Gallery />
      <ScrollTopButton />
      <Footer />
    </div>
  );
};

export default GalleryPage;
