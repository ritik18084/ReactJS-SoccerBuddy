import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { GiSoccerBall } from "react-icons/gi";
import "./styles.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar className="menu" expand="lg">
      <NavbarBrand
        style={{
          fontSize: "130%",
          marginRight: "2em",
          color: "white",
          fontWeight: "bold",
        }}
        href="/"
      >
        <GiSoccerBall style={{ color: "white", fontSize: "250%" }} />
        Buddy
      </NavbarBrand>
      <NavbarToggler onClick={() => toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <Link to="/standings/PL">
            <NavItem>
              <button className="btn-menu">Standings</button>
            </NavItem>
          </Link>
          <Link to="/highlights">
            <NavItem>
              <button className="btn-menu">Highlights</button>
            </NavItem>
          </Link>
          <Link to="/matches">
            <NavItem>
              <button className="btn-menu">Schedule</button>
            </NavItem>
          </Link>
          <Link to="/teams">
            <NavItem>
              <button className="btn-menu">Teams</button>
            </NavItem>
          </Link>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
