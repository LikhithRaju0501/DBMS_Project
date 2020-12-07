import React, { useEffect, useState } from 'react';
import RecipeReviewCard from '../../Movies_Songs/CardMaterialUI';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SubbedPlatMovies = ({ location, PlatID }) => {
  const [Movies, setMovies] = useState(null);

  useEffect(() => {
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
    <div style={{ backgroundColor: '#badc58' }}>
      <Row>
        {Movies ? (
          Movies.filter((movie) => movie.P_ID === PlatID).map((movie) => (
            <Col key={movie.M_ID} sm={6}>
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
                  Platform={movie.P_ID}
                  ReleaseYear={movie.M_YEAR}
                  imgLink={movie.M_IMAGE}
                  Desc={movie.M_DESC}
                  Cast={movie.M_CAST}
                />{' '}
                <br /> <br />
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
  );
};

export default SubbedPlatMovies;
