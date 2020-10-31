import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import WebseriesComp from '../components/WebseriesComp';

const WebseriesDesc = ({ location }) => {
  const [Movie, setMovie] = useState('');
  useEffect(() => {
    const { movie } = queryString.parse(location.search);
    setMovie(movie);
  }, [location.search]);
  return (
    <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
      <WebseriesComp Name={Movie} />
    </div>
  );
};

export default WebseriesDesc;
