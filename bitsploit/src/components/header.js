import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from 'react-bootstrap';

const Header = ({ siteTitle }) => (
  <header className={'blogHeader'}>
    <h1 className={"blogTitle"}>
        <Link to="/">{siteTitle}</Link>
    </h1>

    <Navbar className={'blogNav'}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="/" className={'blogNavLink'}>HOME</Nav.Link>
            <Nav.Link href="about" className={'blogNavLink'}>ABOUT</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
