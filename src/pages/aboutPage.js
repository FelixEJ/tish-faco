import * as React from "react";
import NavBar from "../components/navBar";
import LogoHeader from "../components/header";
import Footer from "../components/footer";
import TextBlock from "../components/textBlock";

const AboutPage = () => {
  return (
    <div>
      <LogoHeader />
      <NavBar/>
      <TextBlock />
      <Footer />
    </div>
  );
};

export default AboutPage;
