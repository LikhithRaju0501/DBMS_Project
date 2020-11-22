import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import { Link } from 'react-router-dom';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { motion } from 'framer-motion';

const NavBarComp = ({ Name, UserID }) => {
  return (
    <div style={{ marginLeft: 50, marginRight: 50 }}>
      <Navbar bg='info' expand='lg'>
        <Navbar.Brand>
          <motion.h2
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ scale: 1 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5 }}
          >
            <div style={{ color: '#dff9fb' }}>{Name}</div>
          </motion.h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <NavDropdown title='Check Out Others' id='basic-nav-dropdown'>
              <div style={{ marginLeft: 10, marginRight: 10 }}>
                <Link
                  to={`/Home?name=${Name}&user_id=${UserID}`}
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  Movies
                </Link>{' '}
                <br /> <NavDropdown.Divider />
                <Link
                  to={`/Songs?name=${Name}&user_id=${UserID}`}
                  style={{ textDecoration: 'none' }}
                >
                  Songs
                </Link>{' '}
                <br />
                <NavDropdown.Divider />
                <Link
                  to={`/WebSeries?name=${Name}&user_id=${UserID}`}
                  style={{ textDecoration: 'none' }}
                >
                  Web Series
                </Link>{' '}
                <br />
                <NavDropdown.Divider />
                <Link
                  to={`/MySubbed?name=${Name}&user_id=${UserID}`}
                  style={{ textDecoration: 'none' }}
                >
                  My Subscriptions
                </Link>{' '}
                <br />
                <NavDropdown.Divider />
                <Link
                  to={`/SubPlat?name=${Name}&user_id=${UserID}`}
                  style={{ textDecoration: 'none' }}
                >
                  Subscribe Platforms
                </Link>{' '}
                <br />
                <NavDropdown.Divider />
                <NavDropdown.Divider />
                <Link to={`/`} style={{ textDecoration: 'none' }}>
                  Signout
                </Link>{' '}
                <br />
                <NavDropdown.Divider />
                <NavDropdown.Divider />
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
