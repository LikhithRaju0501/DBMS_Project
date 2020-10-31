import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import { Link } from 'react-router-dom';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { motion } from 'framer-motion';

const NavBarComp = ({ Name }) => {
  return (
    <div style={{ marginLeft: 50, marginRight: 50 }}>
      <Navbar bg='warning' expand='lg'>
        <Navbar.Brand href='#home'>
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
              <NavDropdown.Item>
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
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>{' '}
      <br />
    </div>
  );
};

export default NavBarComp;

/* <br />
<Nav
  appearance='tabs'
  reversed
  activeKey={Active}
  onSelect={handleSelect}
  style={{ backgroundColor: '#feca57' }}
>
  <Nav.Item eventKey='movies' style={styles.navBar}>
    <Link to='/Home' style={styles.linkStyle}>
      Movies List
    </Link>
  </Nav.Item>
  <Nav.Item eventKey='songs'>
    <Link to='/Songs' style={styles.linkStyle}>
      Songs List
    </Link>
  </Nav.Item>
  <Nav.Item eventKey='webseries'>
    <Link to='/Webseries' style={styles.linkStyle}>
      Webseries List
    </Link>
  </Nav.Item>
  <Nav.Item eventKey='about'>
    <Link to='/about' style={styles.linkStyle}>
      About
    </Link>
  </Nav.Item>
  <HeadingComp />
</Nav>{' '}
<br />
<Link to='/' style={{ textDecoration: 'none' }}>
  <Button color='blue'>
    <Icon icon='sign-out' /> LogOut
  </Button>
</Link> */
