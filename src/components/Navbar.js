import React from 'react'
import '../styles/Navbar.css'

import { Navbar, Nav } from 'react-bootstrap'

export const Appbar = () => {
  return (
    <Navbar sticky="top" bg="white" expand="md">
      <a id="logolink" href="#header">
        {/* https://ibb.co/xjjdT24 */}
        <img id="logo" src="https://i.ibb.co/swwzYgB/logo.png"
          width="auto"
          height="50"
          className="d-inline-block align-top"
          alt="beiatrix"
        />
      </a>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
        <Nav >
          <Nav.Item>
            <Nav.Link href="/#about">ABOUT</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/#projects">PROJECTS</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://drive.google.com/file/d/1MsULmn9gYS5_JPgutD-Wlfu5ZOOc0YkM/view?usp=sharing" target="_blank">RESUME</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/#contact">CONTACT</Nav.Link>
          </Nav.Item>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

