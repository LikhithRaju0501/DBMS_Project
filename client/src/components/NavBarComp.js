import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import { Link } from 'react-router-dom';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { motion } from 'framer-motion';

const NavBarComp = ({ Name, UserID }) => {
  return (
    <div style={{ marginLeft: 50, marginRight: 50 }}>
      <Navbar bg='warning' expand='lg'>
        <Navbar.Brand>
          <motion.h2
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ scale: 1 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5 }}
          >
            {Name}
          </motion.h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <NavDropdown title='Check Out Others' id='basic-nav-dropdown'>
              <div style={{ marginLeft: 10 }}>
                <Link
                  to={`/Home?name=${Name}&user_id=${UserID}&platID=0`}
                  style={{ textDecorationWidth: 'none' }}
                >
                  Movies
                </Link>{' '}
                <br />
                <Link
                  to={`/Songs?name=${Name}&user_id=${UserID}`}
                  style={{ textDecorationWidth: 'none' }}
                >
                  Songs
                </Link>{' '}
                <br />
                <Link
                  to={`/WebSeries?name=${Name}&user_id=${UserID}`}
                  style={{ textDecorationWidth: 'none' }}
                >
                  Web Series
                </Link>{' '}
                <br />
                <Link
                  to={`/MySubbed?name=${Name}&user_id=${UserID}`}
                  style={{ textDecorationWidth: 'none' }}
                >
                  Subbed Platforms
                </Link>{' '}
                {/* <Link
                  to={`/About?name=${Name}&user_id=${UserID}`}
                  style={{ textDecorationWidth: 'none' }}
                >
                  About
                </Link>{' '} */}
                <br />
                <hr />
                <Link to={`/`} style={{ textDecorationWidth: 'none' }}>
                  Signout
                </Link>{' '}
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>{' '}
      <br />
    </div>
  );
};

export default NavBarComp;

/* <NavDropdown.Item>
                <Link
                  to={`/Home?name=${Name}`}
                  style={{ textDecorationWidth: 'none' }}
                >
                  Movies
                </Link>{' '}
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to={`/Songs?name=${Name}`}
                  style={{ textDecorationWidth: 'none' }}
                >
                  Songs
                </Link>{' '}
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to={`/WebSeries?name=${Name}`}
                  style={{ textDecorationWidth: 'none' }}
                >
                  Web Series
                </Link>{' '}
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to={`/About?name=${Name}`}
                  style={{ textDecorationWidth: 'none' }}
                >
                  About
                </Link>{' '}
              </NavDropdown.Item>
              <hr />
              <NavDropdown.Item>
                <Link to={`/`} style={{ textDecorationWidth: 'none' }}>
                  Signout
                </Link>{' '}
              </NavDropdown.Item> */
