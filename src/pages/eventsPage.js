import * as React from "react";
import NavBar from "../components/navBar";
import LogoHeader from "../components/header";
import Footer from "../components/footer";
import "../components/textBlock.css";

const EventsPage = () => {
  
  return (
    <div>
      <LogoHeader />
      <NavBar />
      <h1 className="title">Events</h1>
      <p className="textBlock">Events temporarily suspended due to covid restrictions, check out our <a href="https://www.facebook.com/tishfaco">Facebook</a> page for the details.</p>
      <Footer />
    </div>
  );
};

export default EventsPage;
