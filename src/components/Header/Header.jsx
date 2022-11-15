import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <Navbar>
      <Container>
        <Link to="/">
          <Navbar.Brand
            className={
              location.pathname === "/"
                ? "btn btn-dark text-light"
                : "btn btn-light"
            }
          >
            Home
          </Navbar.Brand>
        </Link>
        <Link to="/add">
          <Navbar.Brand
            className={
              location.pathname === "/add"
                ? "btn btn-dark text-light"
                : "btn btn-light"
            }
          >
            Add
          </Navbar.Brand>
        </Link>
        <Link to="/contacts">
          <Navbar.Brand
            className={
              location.pathname === "/contacts"
                ? "btn btn-dark text-light"
                : "btn btn-light"
            }
          >
            Contacts
          </Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
