import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './CSS/SignUpAbout.css';

const AboutScreen = () => {
  return (
    <div className='about-container'>
      <div
        style={{
          color: 'black',
          fontFamily: 'Sansita Swashed',
          width: '70%',
        }}
      >
        <Card style={{ borderColor: 'black', borderWidth: '3px' }}>
          {' '}
          <h3
            style={{
              fontSize: 35,
              margin: 50,
            }}
          >
            {' '}
            Hey!! Welcome , You might be here to know about this website. We
            Keep you updated about the latest Movies, Songs , Webseries released
            on various OTT platforms. The OTT platforms include Amazon Prime
            Video, Netflix, Spotify and Jio Saavn right now. You can Enjoy ;)
          </h3>
          <Link to='/' style={{ textDecoration: 'none' }}>
            {' '}
            <Button
              style={{ width: '50%', marginLeft: '25%', marginBottom: 30 }}
            >
              Back To SignUp and Login
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default AboutScreen;
