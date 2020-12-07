import React, { useEffect, useState } from 'react';
import RecipeReviewCard from '../../Movies_Songs/CardMaterialUI';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SubbedPlatWebseries = ({ location, PlatID }) => {
  const [Series, setSeries] = useState(null);
  useEffect(() => {
    axios
      .get('http://localhost:4000/series')
      .then((res) => {
        setSeries(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [location]);
  return (
    <div style={{ backgroundColor: '#ffbe76' }}>
      <Row>
        {Series ? (
          Series.filter((serie) => serie.P_ID === PlatID).map((serie) => (
            <Col key={serie.S_ID} sm={6}>
              <Link
                to={`/descriptionSeries?movie=${serie.S_NAME}`}
                style={{ textDecoration: 'none' }}
              >
                {' '}
                <br />{' '}
                <RecipeReviewCard
                  Name={serie.S_NAME}
                  Rating={serie.S_RATING}
                  ReleaseYear={serie.S_YEAR}
                  Platform={serie.P_ID === 1 ? 'Amazon Prime Video' : 'Netflix'}
                  Season={serie.S_SEASON}
                  imgLink={serie.S_IMAGE}
                />{' '}
                <br /> <br />
              </Link>
            </Col>
          ))
        ) : (
          <Spinner animation='border' style={{ marginLeft: 750 }} role='status'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        )}
      </Row>
    </div>
  );
};

export default SubbedPlatWebseries;
