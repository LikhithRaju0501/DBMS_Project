import React, { useEffect, useState } from 'react';
import CardDisplayComp from '../../Movies_Songs/CardDisplayComp';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SubbedPlatMovies = ({ location, PlatID }) => {
  const [Movies, setMovies] = useState(null);
  console.log(PlatID);

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
    <div>
      {Movies ? (
        Movies.filter((movie) => movie.P_ID === PlatID).map((movie) => (
          <Link
            key={movie.M_ID}
            to={`/description?movie=${movie.M_NAME}`}
            style={{ textDecoration: 'none' }}
          >
            <CardDisplayComp
              STYLES={{
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '50%',
                height: '30%',
              }}
              Director={movie.M_DIRECTOR}
              Writer={movie.M_WRITER}
              Name={movie.M_NAME}
              Duration={movie.M_DUR}
              Rating={movie.M_RATING}
              Platform={movie.P_ID === 1 ? 'Amazon Prime Video' : 'Netflix'}
              ReleaseYear={movie.M_YEAR}
              imgLink={movie.M_IMAGE}
            />
          </Link>
        ))
      ) : (
        <div>
          <Spinner animation='border' style={{ marginLeft: 750 }} role='status'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        </div>
      )}
    </div>
  );
};

export default SubbedPlatMovies;
