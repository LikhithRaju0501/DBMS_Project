import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeReviewCard from '../components/Movies_Songs/CardMaterialUI';
import './CSS/SignUpAbout.css';
import SideNavBar from '../components/SideNavBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const WebseriesScreen = ({ location }) => {
  const [Name, setName] = useState(null);
  const [UserID, setUserID] = useState(null);
  const [Series, setSeries] = useState(null);

  useEffect(() => {
    const { name, user_id } = queryString.parse(location.search);
    setName(name);
    setUserID(user_id);

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
    <div className='WebSeries-container'>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1, width: '10%' }}>
          <SideNavBar Name={Name} UserID={UserID} />
        </div>

        <br />

        <div style={{ marginLeft: '10%' }}>
          <br />
          <Row>
            {Series ? (
              Series.map((serie) => (
                <Col key={serie.M_ID} sm>
                  {' '}
                  <Link
                    to={`/descriptionSeries?movie=${serie.S_NAME}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <RecipeReviewCard
                      Name={serie.S_NAME}
                      Rating={serie.S_RATING}
                      ReleaseYear={serie.S_YEAR}
                      Platform={
                        serie.P_ID === 1 ? 'Amazon Prime Video' : 'Netflix'
                      }
                      Season={serie.S_SEASON}
                      imgLink={serie.S_IMAGE}
                    />{' '}
                    <br />
                  </Link>
                </Col>
              ))
            ) : (
              <div>
                <Spinner
                  animation='border'
                  style={{ marginLeft: 750 }}
                  role='status'
                >
                  <span className='sr-only'>Loading...</span>
                </Spinner>
              </div>
            )}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default WebseriesScreen;
