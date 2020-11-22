import React, { useEffect, useState } from 'react';
import CardDisplayComp from '../../Movies_Songs/CardDisplayComp';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div>
      {Series ? (
        Series.filter((serie) => serie.P_ID === PlatID).map((serie) => (
          <Link
            key={serie.S_ID}
            to={`/descriptionSeries?movie=${serie.S_NAME}`}
            style={{ textDecoration: 'none' }}
          >
            {' '}
            <CardDisplayComp
              STYLES={
                serie.P_ID === 1
                  ? {
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      width: '50%',
                      height: '30%',
                    }
                  : {
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      width: '200%',
                      height: '30%',
                    }
              }
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

export default SubbedPlatWebseries;
