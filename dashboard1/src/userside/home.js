import React, { useState } from "react";
import styles from "./home.module.css";
import logo from "assets/img/gallery/pride path logo.png"; // Make sure the path is correct
import Spinner from "react-bootstrap/Spinner";
import Carousel from "react-bootstrap/Carousel";
import one from "assets/img/1.jpg"; // Make sure the path is correct
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import myg from "assets/img/gallery/myg.png";
import amc from "assets/img/gallery/amc.png";
import zamoria from "assets/img/gallery/zamoria.png";
import quachi from "assets/img/gallery/quachi.png";
import spanio from "assets/img/gallery/spanio.png";
import { IoArrowRedoCircle } from "react-icons/io5";
import { from } from "stylis";

function Home() {
  const [hover, setHover] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);

  const toggleMenus = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // Function to handle click events
  const handleClick = (componentName) => {
    setSelected(componentName);
  };

  // Function to apply styles conditionally
  const getStyle = (componentName) => {
    return componentName === selected
      ? {
          textDecoration: "overline",
          textDecorationColor: "#FF0000",
          textDecorationThickness: "2px",
        }
      : {};
  };
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src={logo} alt="Pride Paths Logo" /> {/* Alt attribute added for accessibility */}
        </div>
        <button className={styles.hamburger} onClick={toggleMenus}>
          <div className={styles.hamburgerLine}></div>
          <div className={styles.hamburgerLine}></div>
          <div className={styles.hamburgerLine}></div>
        </button>
        <div className={`${styles.menu} ${isMenuOpen ? styles.showMenu : ""}`}>
          <a href="#home" className={styles.navItem}>
            Home
          </a>
          <a href="#about" className={styles.navItem}>
            About
          </a>
          <a href="#services" className={styles.navItem}>
            Services
          </a>
          <a href="#portfolio" className={styles.navItem}>
            Portfolio
          </a>
          <a href="#contact" className={styles.navItem}>
            Contact
          </a>
        </div>
      </nav>
      {/* //carousel */}
      <Carousel fade>
        <Carousel.Item>
          <img src={one} className={styles.Carousel1}></img>
          <Carousel.Caption>
            <h3 className={styles.main_heading}>TRAILBLAZING </h3>
            <p className={styles.main_heading1}>
              success paths
              <Spinner animation="grow" />
            </p>
            <div>
              <Spinner animation="grow" />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={one} className={styles.Carousel1}></img>
          <Carousel.Caption>
            <h3 className={styles.main_heading}>PRIDE PATHS </h3>
            <p className={styles.main_heading1}>
              we pave your paths to success
              <Spinner animation="grow" />
            </p>
            <div>
              <Spinner animation="grow" />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* // */}
      <div className="row">
        <div id={styles.div1} className="col-sm-12 col-md-6 col-lg-6 ">
          <h3 className={styles.main_heading3}>MODERN DIGITAL </h3>
          <h3 className={styles.main_heading1}>
            DESIGN EXPERIENCE <Spinner animation="grow" />
          </h3>
          <p>
            encapsulates a perception-focused approach, utilizing the mustard seed technique for
            innovative corporate services and media production, to enhance user interaction and
            aesthetic appeal in digital environments.
          </p>
        </div>
        <div id={styles.div2} className="col-sm-12 col-md-6 col-lg-6 ">
          <div
            className={`text-uppercase wow fadeInRight ${styles.serviceButton}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <a href="service.html" style={{ color: "white" }} className={styles.serviceButtons}>
              Our Services
              <span className={styles.serviceButtonSpan} />
            </a>
          </div>
        </div>
      </div>
      {/* cards */}
      <div style={{ backgroundColor: "black" }}>
        <div className={styles.content}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <i className="material-icons md-36">face</i>
            </div>
            <p className={styles.title}>About US</p>
            <p className={styles.text}>Learn More About Our Mission</p>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <i className="material-icons md-36">favorite_border</i>
            </div>
            <p className={styles.title}>Services</p>
            <p className={styles.text}> Discover how we can help you succeed.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <i className="material-icons md-36">alternate_email</i>
            </div>
            <p className={styles.title}>Contact us</p>
            <p className={styles.text}>Reach out for inquiries</p>
          </div>
        </div>
      </div>
      {/* //trusted by// */}
      <div style={{ backgroundColor: "black", height: "100px" }}>
        <p className={styles.trust}>Trusted by</p>
      </div>
      <div className={styles.rows}>
        <div className={styles.columns}>
          <img src={myg}></img>
        </div>
        <div className={styles.columns}>
          <img src={amc}></img>
        </div>
        <div className={styles.columns}>
          <img src={zamoria}></img>
        </div>
        <div className={styles.columns}>
          <img src={spanio}></img>
        </div>
        <div className={styles.columns}>
          <img src={quachi}></img>
        </div>
      </div>
      {/* // */}
      <div className="row">
        <div id={styles.div1} className="col-sm-12 col-md-6 col-lg-6 ">
          <h3 className={styles.main_heading3}>EXCELLING IN DIVERSE </h3>
          <h3 className={styles.main_heading1}>
            DEVELOPMENT AREAS <Spinner animation="grow" />
          </h3>
          <div>
            <ul>
              <li className={styles.list}>
                STRATEGY CURATION <IoArrowRedoCircle className={styles.lists} />
              </li>
              <li className={styles.list}>
                {" "}
                COMPLIANCE & GOVERNANCE <IoArrowRedoCircle className={styles.lists} />
              </li>
              <li className={styles.list}>
                GROWTH ACCELERATION <IoArrowRedoCircle className={styles.lists} />
              </li>
              <li className={styles.list}>
                {" "}
                BRANDING POSITIONING <IoArrowRedoCircle className={styles.lists} />
              </li>
              <li className={styles.list}>
                {" "}
                MARKETING & PR <IoArrowRedoCircle className={styles.lists} />
              </li>
            </ul>
          </div>
        </div>
        <div id={styles.div1} className="col-sm-12 col-md-6 col-lg-6 "></div>
      </div>
    </>
  );
}

export default Home;
