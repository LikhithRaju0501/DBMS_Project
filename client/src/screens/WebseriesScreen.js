import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import CardDisplayComp from '../components/Movies_Songs/CardDisplayComp';
import NavBarComp from '../components/NavBarComp';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div>
      <NavBarComp Name={Name} UserID={UserID} />

      {Series ? (
        Series.map((serie) => (
          <Link
            key={serie.S_ID}
            to={`/descriptionSeries?movie=${serie.S_NAME}`}
            style={{ textDecoration: 'none' }}
          >
            {' '}
            <CardDisplayComp
              Name={serie.S_NAME}
              Rating={serie.S_RATING}
              ReleaseYear={serie.S_YEAR}
              Platform={serie.P_ID === 1 ? 'Amazon Prime Video' : 'Netflix'}
              Season={serie.S_SEASON}
              imgLink={serie.S_IMAGE}
            />
          </Link>
        ))
      ) : (
        <Spinner animation='border' style={{ marginLeft: 750 }} role='status'>
          <span className='sr-only'>Loading...</span>
        </Spinner>
      )}
    </div>
  );
};

export default WebseriesScreen;
