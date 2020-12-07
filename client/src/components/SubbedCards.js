import React from 'react';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';

import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SubbedCards = ({
  AnimeName,
  PlatName,
  Stars,
  Review,
  Name,
  UserID,
  platID,
  Width,
}) => {
  return (
    <div
      style={{
        width: Width,
        margin: 'auto',
      }}
    >
      <Card>
        <Link
          to={`/Subscribed?name=${Name}&user_id=${UserID}&platID=${platID}`}
          style={{ textDecoration: 'none' }}
        >
          <div>
            <Card.Header className='Header'>
              <h3 style={{ marginLeft: '40%' }}>{PlatName}</h3>
            </Card.Header>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
              }}
            >
              <Lottie
                style={{ width: '60%', height: '100%' }}
                animationData={AnimeName}
              />
              <div>
                <h4>Your rating: {Stars}</h4>
                <p>Your Review: {Review}</p>
              </div>
            </div>
          </div>
        </Link>
      </Card>
    </div>
  );
};

export default SubbedCards;
