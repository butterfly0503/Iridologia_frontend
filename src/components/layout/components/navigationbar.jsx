import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import Flag from "react-flagkit";
import { IconButton } from "@material-ui/core";
import { connect } from "react-redux";
import { TranslateAction } from "../../../actions/translateAction";
import LangSelect from "./langSelect";

function Naviagtionbar(props) {
  //   handleClick = (key) => {
  //     props.history.push(key);
  //   };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

const mapStateToProps = (state) => ({
  translator: state.translator,
});

export default connect(mapStateToProps, { TranslateAction })(
  withRouter(Naviagtionbar)
);
