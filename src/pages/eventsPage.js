import * as React from "react";
import styled from "styled-components";
import NavBar from "../components/navBar";
import LogoHeader from "../components/header";
import Footer from "../components/footer";
import "../components/textBlock.css";

const Link = styled.a`
  text-decoration: underline;
  cursor: pointer;
`;

const EventsPage = () => {
  return (
    <div>
      <LogoHeader />
      <NavBar />
      <h1 className="title">Events</h1>
      <p className="textBlock">
        Check out our{" "}
        <Link
          href="https://www.facebook.com/tishfaco"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </Link>{" "}
        page for the details.
      </p>
      <Footer />
    </div>
  );
};

export default EventsPage;
