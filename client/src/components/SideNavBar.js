import React from 'react';
import { Sidenav, Dropdown, Nav, Icon } from 'rsuite';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import 'rsuite/dist/styles/rsuite-default.css';

const headerStyles = {
  padding: 20,
  fontSize: 16,
  background: '#34c3ff',
  color: ' #fff',
  display: 'flex',
};

const SideNavBar = ({ Name, UserID }) => {
  return (
    <div style={{ width: 250 }}>
      <Sidenav defaultOpenKeys={['3', '4']}>
        <Sidenav.Header>
          <div style={headerStyles}>
            {' '}
            <motion.h2
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ scale: 1 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5 }}
            >
              <div style={{ color: '#34495e' }}>{Name}</div>
            </motion.h2>
            <Icon
              style={{
                color: 'black',
                marginLeft: 30,
              }}
              icon='imdb'
              size={'2x'}
            />
          </div>
        </Sidenav.Header>
        <Sidenav.Body>
          <Nav>
            <Nav.Item eventKey='1' icon={<Icon icon='video-camera' />}>
              <Link
                to={`/Home?name=${Name}&user_id=${UserID}`}
                style={{
                  textDecoration: 'none',
                }}
              >
                Movies
              </Link>{' '}
            </Nav.Item>
            <Nav.Item eventKey='2' icon={<Icon icon='music' />}>
              <Link
                to={`/Songs?name=${Name}&user_id=${UserID}`}
                style={{ textDecoration: 'none' }}
              >
                Songs
              </Link>{' '}
            </Nav.Item>
            <Nav.Item eventKey='1' icon={<Icon icon='film' />}>
              <Link
                to={`/WebSeries?name=${Name}&user_id=${UserID}`}
                style={{ textDecoration: 'none' }}
              >
                Web Series
              </Link>{' '}
            </Nav.Item>
            <Dropdown
              eventKey='3'
              title='Subscriptions'
              icon={<Icon icon='magic' />}
            >
              <Dropdown.Item divider />

              <Dropdown.Item eventKey='3-1' icon={<Icon icon='heart' />}>
                {' '}
                <Link
                  to={`/MySubbed?name=${Name}&user_id=${UserID}`}
                  style={{ textDecoration: 'none' }}
                >
                  My Subscriptions
                </Link>{' '}
              </Dropdown.Item>
              <Dropdown.Item eventKey='3-2' icon={<Icon icon='question' />}>
                {' '}
                <Link
                  to={`/SubPlat?name=${Name}&user_id=${UserID}`}
                  style={{ textDecoration: 'none' }}
                >
                  Subscribe Platforms
                </Link>{' '}
              </Dropdown.Item>

              <Dropdown.Item divider />
            </Dropdown>

            <Nav.Item eventKey='1' icon={<Icon icon='sign-out' />}>
              <Link to={`/`} style={{ textDecoration: 'none' }}>
                Signout
              </Link>{' '}
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};
export default SideNavBar;
