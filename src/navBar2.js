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

const NavBar2 = ({ click, click2, click3, click4 }) => {
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
          <NavItem>
            <button className="btn-menu" onClick={click}>
              Standings
            </button>
          </NavItem>
          <NavItem>
            <button className="btn-menu" onClick={click2}>
              Highlights
            </button>
          </NavItem>
          <NavItem>
            <button className="btn-menu" onClick={click3}>
              Schedule
            </button>
          </NavItem>
          <NavItem>
            <button className="btn-menu" onClick={click4}>
              Teams
            </button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavBar2;
