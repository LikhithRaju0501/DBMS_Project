import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/SignUpAbout.css';
import RecipeReviewCard from '../components/Movies_Songs/CardMaterialUI';
import SideNavBar from '../components/SideNavBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomeScreen = ({ location }) => {
  const [Name, setName] = useState(null);
  const [UserID, setUserID] = useState(null);
  const [Movies, setMovies] = useState(null);

  useEffect(() => {
    const { name, user_id } = queryString.parse(location.search);

    setName(name);
    setUserID(user_id);

    //Getting Movies
    axios
      .get('http://localhost:4000/movies')
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [location]);
  return (
    <div className='Movie-container'>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1, width: '10%' }}>
          <SideNavBar Name={Name} UserID={UserID} />
        </div>

        <div style={{ marginLeft: '10%' }}>
          <br />
          <Row>
            {Movies ? (
              Movies.map((movie) => (
                <Col key={movie.M_ID} sm>
                  {' '}
                  <Link
                    to={`/description?movie=${movie.M_NAME}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <RecipeReviewCard
                      Director={movie.M_DIRECTOR}
                      Writer={movie.M_WRITER}
                      Name={movie.M_NAME}
                      Duration={movie.M_DUR}
                      Rating={movie.M_RATING}
                      Platform={
                        movie.P_ID === 1 ? 'Amazon Prime Video' : 'Netflix'
                      }
                      ReleaseYear={movie.M_YEAR}
                      imgLink={movie.M_IMAGE}
                      Desc={movie.M_DESC}
                      Cast={movie.M_CAST}
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
      {/* <NavBarComp Name={Name} UserID={UserID} /> */}
    </div>
  );
};

export default HomeScreen;
