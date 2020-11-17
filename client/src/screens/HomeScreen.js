import React, { useEffect, useState } from 'react';
import NavBarComp from '../components/NavBarComp';
import CardDisplayComp from '../components/CardDisplayComp';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeScreen = ({ location }) => {
  const [Name, setName] = useState(null);
  const [Movies, setMovies] = useState(null);

  useEffect(() => {
    const { name } = queryString.parse(location.search);
    setName(name);

    //Getting Movies
    axios
      .get('http://localhost:4000/movies')
      .then((res) => {
        console.log(res.data);
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [location]);
  return (
    <div>
      <NavBarComp Name={Name} />
      {Movies ? (
        Movies.map((movie) => (
          <Link
            key={movie.M_ID}
            to={`/description?movie=${movie.M_NAME}`}
            style={{ textDecoration: 'none' }}
          >
            <CardDisplayComp
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

export default HomeScreen;
