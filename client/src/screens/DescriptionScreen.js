import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import DescriptionComp from '../components/DescriptionComp';

const DescriptionScreen = ({ location }) => {
  const [Movie, setMovie] = useState('');
  useEffect(() => {
    const { movie } = queryString.parse(location.search);
    setMovie(movie);
  }, [location.search]);
  return (
    <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
      <DescriptionComp Name={Movie} />
    </div>
  );
};

export default DescriptionScreen;
