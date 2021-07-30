import * as React from "react";
import NavBar from "../components/navBar";
import LogoHeader from "../components/header";
import Footer from "../components/footer";
import Gallery from "../components/gallery";

const GalleryPage = () => {
  return (
    <div>
      <LogoHeader />
      <NavBar />
      <Gallery />
      <Footer />
    </div>
  );
};

export default GalleryPage;
